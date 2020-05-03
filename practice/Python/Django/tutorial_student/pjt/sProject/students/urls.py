

from django.urls import path
from . import views

# 이곳은 모든 url을 적어서 맵핑하는 파일
# 하지만 모든 url을 이곳에 적는 것 보다는
# 각 어플리케이션마다 url을 관리하는 것이 효율적이다

# 찾기 쉽게 도와주는 변수
app_name = 'students'

# url 맵핑
urlpatterns = [
    # reg로 시작하는 url이 들어오면, 이 메소드를 실행하라,
    # name은 views에서 사용함
    path('reg/', views.regStudent, name='reg'),
    path('regCon/', views.regConStudent, name='regCon'),
    path('all/', views.readStudentAll, name='stuAll'),
    path('<str:name>/det/', views.detStudent, name='stuDet'),
    path('<str:name>/mod/', views.ModStudent, name='stuMod'),
    path('modcon/', views.ModConStudent, name='modCon'),
    path('<str:name>/del', views.delStudent, name='stuDel'),
    # <str:name>은 vies.delStudent를 실행할 때 넘겨주는 인자 name이 왼다


]
