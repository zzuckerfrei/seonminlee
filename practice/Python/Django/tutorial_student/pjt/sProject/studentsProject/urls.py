"""studentsProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

# 이곳은 모든 url을 적어서 맵핑하는 파일
# 하지만 모든 url을 이곳에 적는 것 보다는
# 각 어플리케이션마다 url을 관리하는 것이 효율적이다
urlpatterns = [
    path('admin/', admin.site.urls),# 프로젝트 전체 관리하는 url

    # students로 시작하는 url이 들어오면 studnet.urls파일을 include하라는 메소드
    path('students/', include('students.urls')),

]
