# Generated by Django 4.0.4 on 2022-07-05 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contatos', '0007_alter_contato_status_field'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contato',
            name='email',
            field=models.EmailField(max_length=255, verbose_name='E-mail'),
        ),
        migrations.AlterField(
            model_name='contato',
            name='message',
            field=models.TextField(blank=True, null=True, verbose_name='Mensagem'),
        ),
        migrations.AlterField(
            model_name='contato',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Nome'),
        ),
        migrations.AlterField(
            model_name='contato',
            name='phone_number',
            field=models.BigIntegerField(verbose_name='Número de telefone'),
        ),
    ]
