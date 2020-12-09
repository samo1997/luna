from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from apps.comment.models import Comment
from apps.comment.serializers import CommentSerializer
from apps.comment.permissions import IsUserOrReadOnly


class ListCreateComment(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'review_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, review_id=self.kwargs['review_id'])
