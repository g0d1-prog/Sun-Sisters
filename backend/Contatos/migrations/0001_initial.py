# Generated by Django 4.0.4 on 2022-07-01 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contato',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('phone_number', models.IntegerField()),
            ],
            options={
                'ordering': ['name', 'email', 'phone_number'],
            },
        ),
    ]