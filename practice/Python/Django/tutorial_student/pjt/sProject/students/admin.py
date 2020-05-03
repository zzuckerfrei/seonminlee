from django.contrib import admin
from students.models import Student

# Register your models here.

# 관리자 화면을 등록하는 것
admin.site.register(Student)
