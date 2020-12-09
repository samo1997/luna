from django.contrib.auth import get_user_model
from django.db import models

from apps.review.models import Review

User = get_user_model()


class Comment(models.Model):
    text_content = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        to=User,
        related_name='fk_comment_user',
        on_delete=models.CASCADE
    )
    review = models.ForeignKey(
        to=Review,
        related_name='fk_comment_review',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"Comment by {self.author} on Review: {self.review}"
