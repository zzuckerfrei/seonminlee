
// alert('Im Working. Im JS. Im Beautiful. Im worth it'); // 경고띄우기
console.log('Im Working. Im JS. Im Beautiful. Im worth it');

/* 
1.변수생성
2.초기화
3.사용 
*/

//let 변수
/*
let a = 221;
let b = a - 5;
a = 4; // a를 업데이트함
console.log(b, a);
*/

// const 상수
// 먼저 const사용하고, 나중에 필요할 때 let으로 변경
/*
const a =  221;
let b = a -5;
a = 4;
console.log(b,a);
*/


// string
/*
const what = "seonmin";
const what2 = "😊";
console.log(what);
console.log(what2);
*/

// bool
/*
const wat = true;
console.log(wat);
*/

//number
//const wat = 555;

//float
//const what = 55.55;
//console.log(what);

// Array = list []
const daysOfWeek = ['mon','tue','wed','thu','fri','sat','sun',false,1111,222.44];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[5]);
console.log(daysOfWeek[555]);


// Object = dict {}
const seonminInfo = {name:'seonmin', 
                    age:55,
                    gender:'male',
                    ishandsome:true,
                    favMovies:['along the gods','lotr','oldboy'],
                    favFood:[{name:'kimchi',fatty:false},
                            {name:'cheese burger',fatty:true}]
                };

console.log(seonminInfo);
console.log(seonminInfo.age);

seonminInfo.age = 25;
console.log(seonminInfo.age);

console.log(seonminInfo.favFood);

// function
/*
function sayHello(potato,chicken){
    console.log('hallo',potato,chicken);
};

sayHello('gogogogo','nonono');
*/

function sayhallo(name,age){
    // console.log(`hallo ${name} you are ${age} years old`);
    return `hallo ${name} you are ${age} years old`;
}
sayhallo("seonmin",15);

const greet = sayhallo("seonmin",14);
console.log(greet);


//
const calculator={
    plus: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    multi: function(a, b){
        return a * b
    },
    div: function(a, b){
        return a / b
    },
    pow:function(a, b){
        return a**b
    }
}
calculator.plus(5,5);

const plus = calculator.plus(5,5)
const minus = calculator.minus(5,1)
const multi = calculator.multi(5,5)
const div = calculator.div(222,5)
const pow = calculator.pow(5,5)


console.log(plus)
console.log(minus)
console.log(multi)
console.log(div)
console.log(pow)



//////////////////////////////////

/*
const title = document.querySelector("#title");

console.log(title);

console.log('dddd');
// DOM Document Object Module
// html 보다 우선순위가 높음 = html을 조종할 수 있음
title.innerHTML = "hallo from js";

// title이라는 객체가 가진 함수 목록
console.dir(title);

// title.style.color = 'red';

// document.title.innerHTML = 'i own you now'; //??
*/



// 2-4

/*
function handleResize(event) {
    console.log(event);
    // console.log('i have been resized');
};
*/

// 함수를 호출해옴 - 나중에 쓰고싶을 때 쓰려고
// window.addEventListener('resize', handleResize); 
// 함수를 즉시 실행함
// window.addEventListener('resize', handleResize());
const title = document.querySelector("#title");

console.log(title);

/*
function handleClick() {
    title.style.color = "red";
}
*/
title.addEventListener("click", handleClick);


// 2-5 조건문
// && and 
// || or

/*
const age = prompt("how old are you?");

console.log(age)

if (age < 20) {
    console.log('nope')
} else if (age >= 20 && age < 30){
 console.log('you can drink')   
} else {
    console.log('you are ttak')
}
*/

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS); // toggle 만약 class가 있으면 add, 아니면 remove    
}

function init() {
    title.addEventListener("click", handleClick)
    console.log(title.classList)
}

init();