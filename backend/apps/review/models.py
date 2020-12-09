from django.contrib.auth import get_user_model
from django.db import models

from apps.restaurant.serializers import Restaurant
# from apps.comment.models import Comment

User = get_user_model()


class Review(models.Model):
    text_content = models.CharField(max_length=300)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        to=User,
        related_name='fk_review_user',
        on_delete=models.CASCADE
    )
    likes = models.ManyToManyField(
        to=User,
        related_name='fk_review_like',
        blank=True,
    )
    restaurant = models.ForeignKey(
        to=Restaurant,
        related_name='fk_review_restaurant',
        on_delete=models.CASCADE
    )
    RATING = [
        (0, 'Not rated yet'),
        (1, 'Not recommended'),
        (2, 'Okay'),
        (3, 'Average'),
        (4, 'Good'),
        (5, 'Excellent'),
    ]
    # [...]
    rating = models.PositiveSmallIntegerField(
        choices=RATING,
        default=0,
    )
    # comment = models.ForeignKey(
    #     to=Comment,
    #     related_name='fk_comment_on_review',
    #     on_delete=models.CASCADE
    # )

    def __str__(self):
        return f"Review by {self.author} on Restaurant: {self.restaurant}"
