# urls.py
from django.contrib import admin
from django.urls import path

from auth_app.views import LoginView, ProtectedView, RegisterView
from mcqs.views import MCQListCreateView,ListGamesView,CreateGameView, MCQRetrieveUpdateDestroyView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("register/", RegisterView.as_view(), name="register"),  # Added trailing slash
    path('login/', LoginView.as_view(), name='login'),  # Added trailing slash
    path("protected/", ProtectedView.as_view(), name="protected"),  # Added trailing slash
    path("mcqs/", MCQListCreateView.as_view(), name="mcq-list-create"),  # Added trailing slash
    path("mcqs/<uuid:pk>/", MCQRetrieveUpdateDestroyView.as_view(), name="mcq-detail"),  # Added trailing slash
    path('create-game/', CreateGameView.as_view(), name='create-game'),
     path('join-game/<int:game_id>/', JoinGameView.as_view(), name='join-game'),
    path('list-games/', ListGamesView.as_view(), name='list-games'),
]
