from django.urls import path

from apps.review.views import ListCreateReview, ReviewListAPIView, ReviewListByUserAPIView
from apps.review.views import ReviewRetrieveUpdateDestroyAPIView, ReviewListCreateAPIView


urlpatterns = [
    path('restaurant/<int:restaurant_id>/', ReviewListAPIView.as_view()),
    path('new/<int:restaurant_id>/', ListCreateReview.as_view()),
    path('user/<int:user_id>/', ReviewListByUserAPIView.as_view()),
    path('<int:review_id>/', ReviewRetrieveUpdateDestroyAPIView.as_view()),
    path('', ReviewListCreateAPIView.as_view()),
]
