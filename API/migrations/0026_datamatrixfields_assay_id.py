# Generated by Django 2.2 on 2020-07-03 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0025_auto_20200608_0633'),
    ]

    operations = [
        migrations.AddField(
            model_name='datamatrixfields',
            name='assay_id',
            field=models.TextField(default='NA'),
            preserve_default=False,
        ),
    ]