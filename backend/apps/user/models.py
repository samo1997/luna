from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/username/<filename>
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    email = models.EmailField(
        unique=True
    )
    username = models.CharField(
        max_length=60,
        unique=True
    )
    password = models.CharField(
        max_length=120
    )
    first_name = models.CharField(
        max_length=60
    )
    last_name = models.CharField(
        max_length=60
    )
    phone = models.IntegerField(
        null=True,
        blank=True
    )
    location = models.CharField(
        max_length=80,
        blank=True,
        default=""
    )
    profile_description = models.CharField(
        max_length=150,
        blank=True
    )
    profile_picture = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True
    )
    # things_user_loves = models.CharField(
    #     max_length=150,
    #     blank=True
    # )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
