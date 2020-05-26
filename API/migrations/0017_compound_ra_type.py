# Generated by Django 2.2 on 2020-05-07 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0016_auto_20200506_2134'),
    ]

    operations = [
        migrations.AddField(
            model_name='compound',
            name='ra_type',
            field=models.IntegerField(choices=[(0, 'Source compound'), (1, 'Target compound')], default=0),
            preserve_default=False,
        ),
    ]
