# Generated by Django 4.0.4 on 2022-07-05 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contatos', '0009_contato_contact_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contato',
            name='contact_date',
            field=models.DateTimeField(auto_now=True, verbose_name='Data de contato'),
        ),
    ]