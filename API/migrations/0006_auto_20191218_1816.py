# Generated by Django 2.2.5 on 2019-12-18 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0005_auto_20191210_2013'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='file',
            constraint=models.UniqueConstraint(fields=('user_filename', 'node', 'part'), name='unique_user_filename_node_part'),
        ),
    ]
