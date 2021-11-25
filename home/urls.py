from typing import MappingView
from django.urls import path
from django.views.generic.base import View
from .views import IndexViews, MapViews, HomeViews

urlpatterns = [
    path('',IndexViews.as_view()),
    path('map/',MapViews.as_view()),
    path('home/',HomeViews.as_view()),

]