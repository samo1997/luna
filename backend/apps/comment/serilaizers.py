from rest_framework import serializers

from apps.comment.models import Comment
from apps.user.serializers import UserSerializer
from apps.review.serializers import ReviewSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    review = ReviewSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'author', 'review']
