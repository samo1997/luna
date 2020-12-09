from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from apps.restaurant.models import Restaurant
from apps.restaurant.serializers import RestaurantSerializer, RestaurantMinimalSerializer


User = get_user_model()


class RestaurantListCreateAPIView(ListCreateAPIView):
    """
    GET:
    Returns all the restaurants if no search parameters is given
    If a search parameter is given, it will return all restaurants that contain it in their text_content or user information

    POST:
    Creates a new restaurant instance and returns it
    """
    permission_classes = [AllowAny]
    queryset = Restaurant.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return RestaurantSerializer
        return RestaurantMinimalSerializer

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


class RestaurantRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    GET:
    Returns a restaurant based on the given id

    PUT:
    Updates and returns a restaurant based on the given id

    PATCH:
    Partially updates and returns a restaurant based on the given id

    DELETE:
    Deletes a restaurant based on the given id and return no content status 204
    """

    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'
    # TODO adjust permission for UPDATE and DELETE to IsOwner, for GET default IsAuthenticated is sufficient
    # permission_classes = [IsOwner]


class RestaurantListAPIView(ListAPIView):
    """
    GET:
    Returns all restaurants of given users id
    """
    permission_classes = [AllowAny]


    def get_queryset(self):
        # TODO is there a more efficient, cleaner way?
        requested_user = User.objects.get(id=self.kwargs["user_id"])
        return Restaurant.objects.filter(author=requested_user)

    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'
