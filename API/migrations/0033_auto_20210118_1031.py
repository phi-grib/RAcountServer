# Generated by Django 2.2 on 2021-01-18 10:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0032_auto_20210114_2121'),
    ]

    operations = [
        migrations.RenameField(
            model_name='problemdescription',
            old_name='decison_context',
            new_name='decision_context',
        ),
    ]
