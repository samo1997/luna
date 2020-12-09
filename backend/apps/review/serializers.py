from rest_framework import serializers

from apps.review.models import Review
from apps.user.serializers import UserSerializer
from apps.restaurant.serializers import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)
    likes_counter = serializers.SerializerMethodField()

    def get_likes_counter(self, restaurant):
        return restaurant.likes.all().count()

    class Meta:
        model = Review
        fields = '__all__'


class ReviewMinimalSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
