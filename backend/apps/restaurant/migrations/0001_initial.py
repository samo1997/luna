# Generated by Django 3.1.2 on 2020-10-29 19:49

import apps.restaurant.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('category', models.CharField(max_length=200)),
                ('country', models.CharField(max_length=200)),
                ('street', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('zip', models.IntegerField(blank=True, null=True)),
                ('website', models.CharField(blank=True, default='', max_length=200)),
                ('phone', models.IntegerField(blank=True, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True, unique=True)),
                ('opening_hours', models.CharField(max_length=200)),
                ('price_level', models.IntegerField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to=apps.restaurant.models.user_directory_path)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
