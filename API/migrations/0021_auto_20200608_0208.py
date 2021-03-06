# Generated by Django 2.2 on 2020-06-08 02:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0020_auto_20200507_1410'),
    ]

    operations = [
        migrations.CreateModel(
            name='DataMatrix',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AddField(
            model_name='compound',
            name='rdkit',
            field=models.TextField(default=None, null=True),
        ),
        migrations.CreateModel(
            name='UnitType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.Projects')),
                ('std_unit', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='API.UnitType')),
            ],
        ),
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('equivalence', models.FloatField()),
                ('name', models.TextField()),
                ('symbol', models.TextField()),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='API.UnitType')),
            ],
        ),
        migrations.CreateModel(
            name='DataMatrixFields',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('description', models.TextField()),
                ('value', models.FloatField()),
                ('std_value', models.FloatField()),
                ('row', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.DataMatrix')),
                ('std_unit', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='DataMatrixStdUnit', to='API.Unit')),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='DataMatrixUnit', to='API.Unit')),
            ],
        ),
        migrations.AddField(
            model_name='datamatrix',
            name='compound',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.Compound'),
        ),
        migrations.AddField(
            model_name='datamatrix',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.Projects'),
        ),
    ]
