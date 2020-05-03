from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from students.models import Student

def regStudent(request):
    # 위의 함수를 호출하면 아래의 *.html로 이동하게 만들어줌
    return render(request, 'students/registerStudent.html')


def regConStudent(request):

    # POST방식으로 들어오므로 POST로 씀

    name = request.POST['name']
    major = request.POST['major']
    age = request.POST['age']
    grade = request.POST['grade']
    gender = request.POST['gender']

    # 쿼리스트링qs에 request를 통해 들어온 데이터를 집어넣는다
    # Student객체(사실상 DB테이블을 의미)를 생성해서 사용한다
    qs = Student(s_name = name, s_major = major, s_age = age, s_grade = grade, s_gender = gender)

    # 반드시 save를 해야 DB에 저장된다
    qs.save()

    # 위의 작업을 마친 후 stuall 템플릿을 띄우라는 redirection
    # stuAll이 urls의 name을 의미함.
    return HttpResponseRedirect(reverse('students:stuAll'))

# 모든 학생 조회하는 메소드
def readStudentAll(request):

    # objects.all이 모든 데이터 조회하는 것
    qs = Student.objects.all()
    context =  { 'student_list': qs } # dict로 넘겨줌

    return render(request, 'students/readStudents.html', context)

# 학생 세부정보
def detStudent(request, name):
    qs = Student.objects.get(s_name = name)
    context = {'student_info' : qs}

    return render(request, 'students/detailStudent.html', context)

# 학생 정보 수정하는 페이지
def ModStudent(request, name):
    qs = Student.objects.get(s_name = name) # s_name이 name과 같은 데이터row를 가져오겠다
    context = {'student_info': qs}

    return render(request, 'students/modifyStudent.html', context)

# 수정한 학생정보를 DB에 업데이트 시키는 메소드
def ModConStudent(request):
    # 수정한 정보가 담겨있는 request
    name = request.POST['name']
    major = request.POST['major']
    age = request.POST['age']
    grade = request.POST['grade']
    gender = request.POST['gender']

    # 학생 1건 정보 조회
    qs = Student.objects.get(s_name = name)

    # 수정한 정보로 교체
    qs.s_name = name
    qs.s_major = major
    qs.s_age = age
    qs.s_grade = grade
    qs.s_gender = gender

    # save를 해야 DB에 업데이트 됨
    qs.save()

    # 위의 작업을 마친 후 stuall 템플릿을 띄우라는 redirection
    return HttpResponseRedirect(reverse('students:stuAll'))


# 학생 삭제
def delStudent(request, name):

    qs = Student.objects.get(s_name = name)
    qs.delete()

    # 위의 작업을 마친 후 stuall 템플릿을 띄우라는 redirection
    return HttpResponseRedirect(reverse('students:stuAll'))