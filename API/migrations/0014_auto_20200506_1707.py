# Generated by Django 2.2 on 2020-05-06 17:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0013_nodetype_history_node_list'),
    ]

    operations = [
        migrations.CreateModel(
            name='Compound',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('smiles', models.TextField()),
                ('cas', models.CharField(max_length=12, null=True)),
                ('name', models.TextField(null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.Projects')),
            ],
        ),
        migrations.AddConstraint(
            model_name='compound',
            constraint=models.UniqueConstraint(fields=('project', 'smiles'), name='unique_project_smiles'),
        ),
    ]