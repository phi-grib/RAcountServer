# Generated by Django 2.2.5 on 2020-02-14 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0009_problemdescription'),
    ]

    operations = [
        migrations.CreateModel(
            name='NodeType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, default='')),
            ],
        ),
    ]
