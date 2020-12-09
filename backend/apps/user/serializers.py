import sys

from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.restaurant.models import Restaurant
from apps.interest.serializers import UserInterestSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    # things_user_loves = UserInterestSerializer(many=True)
    # restaurants = serializers.SerializerMethodField()
    # reviews = serializers.SerializerMethodField()
    # comments = serializers.SerializerMethodField()
    # likes = serializers.SerializerMethodField()
    #
    # def get_restaurants(self, user):
    #     return Restaurant.objects.filter(author=user).count()
    #
    # def get_reviews(self, user):
    #     return user.reviews.count()
    #
    # def get_comments(self, user):
    #     return user.comments.count()
    #
    # def get_amount_of_likes_review(self, user):
    #     return user.liked_reviews.count()
    #
    # def get_amount_of_likes_comment(self, user):
    #     return user.liked_comments.count()

    class Meta:
        model = User
        exclude = ('password',)

# 'things_user_loves'
