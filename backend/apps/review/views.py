from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from apps.review.models import Review
from apps.review.serializers import ReviewSerializer
from apps.review.permissions import IsUserOrReadOnly

from apps.restaurant.models import Restaurant
from apps.comment.models import User

from apps.review.serializers import ReviewMinimalSerializer
from rest_framework.response import Response


class ListCreateReview(ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'restaurant_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, restaurant_id=self.kwargs['restaurant_id'])


class ReviewListAPIView(ListAPIView):
    """
    GET:
    Returns all reviews of given restaurant id
    """

    def get_queryset(self):
        requested_restaurant = Restaurant.objects.get(id=self.kwargs["restaurant_id"])
        return Review.objects.filter(restaurant=requested_restaurant)

    permission_classes = [AllowAny]

    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'


class ReviewListByUserAPIView(ListAPIView):
    """
    GET:
    Returns all reviews of given user id
    """
    permission_classes = [AllowAny]

    def get_queryset(self):
        requested_user = User.objects.get(id=self.kwargs["user_id"])
        return Review.objects.filter(author=requested_user)

    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'


class ReviewRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    PATCH:
    Update a specific review (only by owner) by given id

    DELETE:
    Delete a specific review (only by owner) by given id and return no content status 204
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    # TODO adjust permission for UPDATE and DELETE to IsOwner, for GET default IsAuthenticated is sufficient
    # permission_classes = [IsOwner]


class ReviewListCreateAPIView(ListCreateAPIView):
    """
    GET:
    Returns all the reviews if no search parameters is given
    If a search parameter is given, it will return all reviews that contain it in their text_content or user information

    POST:
    Creates a new review instance and returns it
    """
    permission_classes = [AllowAny]

    queryset = Review.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ReviewSerializer
        return ReviewMinimalSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')
        if search_string:
            queryset = queryset.filter(
                Q(name__icontains=search_string)
                | Q(author__username__icontains=search_string)
                | Q(author__first_name__icontains=search_string)
                | Q(author__last_name__icontains=search_string)
                | Q(author__name__icontains=search_string)
            )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
