from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/name/<filename>
    return f'{instance.name}/{filename}'


class Restaurant(models.Model):
    author = models.ForeignKey(
        to=User,
        related_name='fk_restaurant_to_user',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    name = models.CharField(
        max_length=200,
    )
    category = models.CharField(
        max_length=200,
    )
    country = models.CharField(
        max_length=200,
    )
    street = models.CharField(
        max_length=200,
    )
    city = models.CharField(
        max_length=200,
    )
    zip = models.IntegerField(
        null=True,
        blank=True
    )
    website = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )
    phone = models.IntegerField(
        null=True,
        blank=True
    )
    email = models.EmailField(
        unique=True,
        null=True,
        blank=True
    )
    opening_hours = models.CharField(
        max_length=200,
    )
    price_level = models.IntegerField(
        null=True,
        blank=True
    )
    image = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True
    )
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}: {self.name[0:100]}"
