// console.log('Im working. I am JS.');

// const something='Something';


// /* array
// 파이썬에서 list와 같은듯
// 인덱스로 접근도 같다
// */
// const daysOfWeek = ['mon','tue','wed','thu','fri','sat','sun',12314,something];
// console.log(daysOfWeek[2])
// console.log(daysOfWeek);

// /* Object
// 파이썬에서 dict와 같은듯
// */

// const info = {
//   name : 'seonmin',
//   age : '28',
//   gender:'male',
//   isgood:true,
//   favMovies : ['oldboy', 'harrypotter', 'batman'],
//   favFood : [{name : 'sushi', national : 'japan'}, {name : 'doner', national: 'deutschland'}],
// }

// console.log(info)
// console.log('-------')
// console.log(info.favFood)
// console.log('-------')
// console.log(info.favFood[1])
// console.log('-------')
// console.log(info.favMovies)
// console.log('-------')
// info.favMovies[2] = 'idontknow'
// info.favMovies[3] = 'konan'
// console.log(info.favMovies)
// console.log('-------')


// /* function
// */
// function sayHello(name, age){
//   console.log('Hello!',name, 'you have', age, 'years of age')
// }
// sayHello('beaglemansion', 15)



// /* function 2
// 함수를 갖고있는 객체를 만들어서 함수 활용하기.. 
// 계산기 만들기 */

// const calculator = {
//   plus : function(a,b){
//     return a + b
//   },

//   minus : function(a,b){
//     return a - b
//   },

//   multi : function(a,b){
//     return a * b
//   },

//   divide : function(a,b){
//     return a / b
//   },

//   square : function(a,b){
//     return a ** b
//   },
// }

// let my_return = calculator.plus(5,5)
// console.log(my_return)
// my_return = calculator.minus(5,2)
// console.log(my_return)
// my_return = calculator.multi(5,2)
// console.log(my_return)
// my_return = calculator.divide(5,2)
// console.log(my_return)
// my_return = calculator.square(5,3)
// console.log(my_return)


// const my_function = {
//   say : function(what,whom){
//     return `HI ${whom}, ${what}`
//   },
  
//   lernen : function(what){
//     return `Ich moechte mehr ${what} lernen.`
//   }
// }

// const a = my_function.say('you are so cute 😊💕', 'sarah')
// console.log(a)
// const b = my_function.lernen('Java Script')
// console.log(b)

// ////////////////////////////////
// /*
// JS DOM Functions

// js는 html을 js의 DOM객체로 가져올 수 있다
// 가져와서 이렇게 수정도 할 수 있다
// 그래서 js가 강력하다고 말하는듯?
// 이런 수정이 가능하다면 얼마든 원하는대로 바꿀 수 있으니까

// */

// const title = document.querySelector('#title');
// // querySelector는 node의 첫 번째 자식을 반환함.. 무슨말?

// console.log(title);
// console.error('fuck');

// // 원래 index.html을 들어가면 this works!이지만
// // js로 끌어와서 객체로 만들고 수정해서 아래의 문장이 출력될것임
// title.innerHTML = "Hallo Leute! alles klar?";
// // title.style.color = 'black';
// document.title = 'i own you now';

// /* ////////// ✔ Event ////////////////////////
// 이벤트가 발생하면 정해놓은 함수를 실행시킴

// .addEventListner(특정 이벤트, 작동시킬 함수)
// 이런 문법으로 사용함
// */

// // 1) 사이즈 조정
// function handleResize(event){
//   // console.log("i have been resized")
//   console.log(event);
// }
// window.addEventListener("resize", handleResize)
// ////// 여기서 아주 중요한 것 /////
// // handleResized는 필요할 때 함수를 불러서 쓰겠다는 의미. resize되면 콘솔 출력
// // handleResized()는 즉시 함수를 사용하겠다는 의미. resize되지 않아도 바로 콘솔에 i have been resized가 켜짐


// // 2) 클릭 
// function handleClick(){
//   title.style.color = "blue";
// }

// title.addEventListener("click", handleClick)



// /* ✔ if문을 배우기 위한 예제 
// prompt는 더이상 사용하지 않는 옛날 기능임 */
// const age = prompt('how old are you?, wie alt sind Sie?')


// if (age >= 18 && age <=21){
//   console.logg('you can drink but you should not \nSie koennen trinken aber Sie sollen nicht')
// } else if (age > 21){
//   console.log('you can \nSie koennen trinken')
// } else {
//   console.log('too young baby \nzu jung Bruda')
// }

// /* ✔ 이벤트 응용 예제
// 이벤트 발생할 때마다 title 색깔 바꾸기! */

// // const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";



// function handleClick() {
//   const currentColor = title.style.color;
//   // console.log(currentColor)
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   } 
// }


// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener('click', handleClick)
// }


// init();


// /// ✔ on/offline 네트워크 확인 ///
// function handleOffline() {
//   console.log('bye')
// }
// function handleOnline() {
//   console.log('welcome back')
// }


// window.addEventListener('offline', handleOffline)
// window.addEventListener('online', handleOnline)



// /// css 여기 이름을 뭐라고 해야되지?? ///
// // js가 웹사이트의 스타일을 처리하지 않는 방법?

// // const title = document.querySelector("#title")
// const CLICKED_CLASS = "clicked";

// function handleClick() {
//   // const hasClass = title.classList.contains(CLICKED_CLASS);
//   // if (hasClass){  // !는 반대를 의미함
//   //   title.classList.remove(CLICKED_CLASS);
//   // } else {
//   //   title.classList.add(CLICKED_CLASS);
//   // }

//   // ✔ 토글 toggle 1줄 사용으로 위의 코드 대체
//   // (1)인자값이 존재하는지 확인
//   // (2)존재하지 않을 경우 add
//   // (3)존재할 경우 remove
//   title.classList.toggle(CLICKED_CLASS);
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }

// init();


/////////////// 위에까지 이론 끝 ///////////////



////////   실습   시작 ///////////////
// 3.1 Making a JS Clock part One //
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector('h1');


function getTime(){
  // web에서 console창에서 한 것과 같은 작업
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = 
  `${hours < 10 ? `${hours}` : hours}:${minutes <10 ? `${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init()


// ✔ setInverval 함수 1번인자-사용할 함수, 2번인자-실행간격(시간)
// sayHallo함수를 3초마다 한 번씩 실행시키는 함수
function sayHallo(){
  console.log('hallo')
}

setInterval(sayHallo, 3000)
//////////////////////
// ✔ 삼항연산자 or mini if함수
// `${hours < 10 ? `${hours}` : hours}`
// hours가 10보다 작을 경우 ${hours} 반환
// hours가 10보다 클 경우 hours 반환


