# Generated by Django 4.0.4 on 2022-07-05 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contatos', '0006_rename_status_contato_status_field'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contato',
            name='status_field',
            field=models.CharField(choices=[('P', 'Pendente'), ('EP', 'Em processo'), ('C', 'Contatado')], default='', max_length=2, verbose_name='Status'),
        ),
    ]
