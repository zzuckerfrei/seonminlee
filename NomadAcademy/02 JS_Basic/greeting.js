/* 
✔ local storage 
작은 정보를 나의 유저 컴퓨터에 저장하는 방법
예를들어 그 시계사이트에서 시계 = 참/거짓 같은 작은 정보를 저장하는 것
*/

const form = document.querySelector('.js-form'),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";




function saveName(text){
    localStorage.setItem(USER_LS, text);    
}

function handleSubmit(event){
    event.preventDefault(); // submit의 default 이벤트인 새로고침refresh을 막는 함수
    const currentValue = input.value // placeholder입력받은 값
    // console.log(currentValue)
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);  // 정확히 왜 하는건가? css의 display:block을 위해??
    form.addEventListener("submit", handleSubmit) // submit 이벤트발생하면, 다음 함수 실행
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // 왜함? 
    greeting.classList.add(SHOWING_CN); // h4의 클래스리스트에 showing을 추가시키는 것
    greeting.innerText = `Hello ${text}`;
}

// 저장한 USERNAME을 가져오려고하는 함수
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    
    if (currentUser === null){
        // he is not
        askForName()
    } else{
        // he is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName()
}

init();