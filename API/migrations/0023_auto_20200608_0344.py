# Generated by Django 2.2 on 2020-06-08 03:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0022_auto_20200608_0343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='unittype',
            name='std_unit',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='API.Unit'),
        ),
    ]
