# Generated by Django 4.0.4 on 2022-05-22 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('overview', '0002_rename_rating_count_listing_reviews_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='country',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='listing',
            name='city',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
