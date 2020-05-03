
# Create your models here.
from django.db import models

# 클래스를 만듦으로써 DB테이블을 생성한다
# 테이블명이 Student인 테이블을 생성하는 작업 -> 즉, migrate해야함
# 내장클래스인 models.Model를 상속받아야함
class Student(models.Model):
    s_name = models.CharField(max_length=100)
    s_major = models.CharField(max_length=100)
    s_age = models.IntegerField(default=0)
    s_grade = models.IntegerField(default=0)
    s_gender = models.CharField(max_length=30)


    # shell에서 작업할 때 return되는 값을 지정하는 것
    # sohye 이런 값이 출력되어서 구분한다
    def __str__(self):
        return self.s_name