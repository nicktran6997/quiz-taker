from django.urls import include, path
from rest_framework import routers
from . import views

#using routers instead of traditional urlpatterns in case I want to expand on the project
router = routers.DefaultRouter()
router.register('', views.QuizViewSet)
urlpatterns = router.urls