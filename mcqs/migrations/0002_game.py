# Generated by Django 5.0.6 on 2024-07-14 10:49

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mcqs', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('game_id', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.CharField(choices=[('waiting', 'Waiting'), ('active', 'Active'), ('completed', 'Completed')], default='waiting', max_length=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owned_games', to=settings.AUTH_USER_MODEL)),
                ('participants', models.ManyToManyField(related_name='games', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]