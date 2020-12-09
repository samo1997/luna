from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.restaurant.models import Restaurant
from apps.user.serializers import UserSerializer

User = get_user_model()


class RestaurantMinimalSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    reviews_counter = serializers.SerializerMethodField()
    # average_rating = serializers.SerializerMethodField()
    #
    # def get_average_rating(self, restaurant):
    #     number_of_ratings = restaurant.fk_review_restaurant.all().count()
    #     total_of_stars = restaurant.fk_review_restaurant.rating.all()

    def get_reviews_counter(self, restaurant):
        return restaurant.fk_review_restaurant.all().count()

    class Meta:
        model = Restaurant
        fields = '__all__'
