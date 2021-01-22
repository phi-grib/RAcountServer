# Generated by Django 2.2 on 2021-01-14 21:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0031_auto_20201210_1407'),
    ]

    operations = [
        migrations.RenameField(
            model_name='problemdescription',
            old_name='description',
            new_name='scope',
        ),
        migrations.AddField(
            model_name='problemdescription',
            name='decison_context',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AddField(
            model_name='problemdescription',
            name='endpoints',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AddField(
            model_name='problemdescription',
            name='uncertainty',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='datamatrixfields',
            name='assay_type',
            field=models.IntegerField(choices=[(0, 'Calculated physicochemical properties'), (1, 'Biological activity'), (2, 'Physicochemical assay')]),
        ),
        migrations.CreateModel(
            name='InitialRAxHypothesis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ana_cat_approach', models.TextField(blank=True, default='')),
                ('metabolism', models.TextField(blank=True, default='')),
                ('quatitative_var_approach', models.TextField(blank=True, default='')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.Projects', unique=True)),
            ],
        ),
    ]