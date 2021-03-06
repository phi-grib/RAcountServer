# Generated by Django 2.2.5 on 2020-02-17 16:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0010_nodetype'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='nodes',
            name='description',
        ),
        migrations.RemoveField(
            model_name='nodes',
            name='name',
        ),
        migrations.AlterField(
            model_name='nodes',
            name='node_seq',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='API.NodeType'),
        ),
    ]
