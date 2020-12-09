from django.urls import path

from apps.comment.views import ListCreateComment

urlpatterns = [
    path('<int:review_id>/', ListCreateComment.as_view())
]
