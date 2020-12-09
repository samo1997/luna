from django.urls import path

from apps.restaurant.views import RestaurantListCreateAPIView
from apps.restaurant.views import RestaurantListAPIView, RestaurantRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('', RestaurantListCreateAPIView.as_view()),
    path('new/', RestaurantListCreateAPIView.as_view()),
    # path('category/<int:category_id>/', RestaurantByCategory.as_view()),
    path('user/<int:user_id>/', RestaurantListAPIView.as_view()),
    path('<int:restaurant_id>/', RestaurantRetrieveUpdateDestroyAPIView.as_view()),
]