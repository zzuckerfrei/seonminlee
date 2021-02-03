const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
 SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); // 로컬스토리지에 USER_LS:text 키밸류 값으로 저장함
    localStorage.setItem('USER_EXIST', 'yes');
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    userExistCheck();
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hallo ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //she is not
        askForName();
        
    } else {
        //she is
        toDoInput.style.display='block';
        paintGreeting(currentUser);
    }
}

function userExistCheck(){
    const user_exist = localStorage.getItem('USER_EXIST');
    if (user_exist === 'yes'){
        toDoInput.style.display='block';
    } 
}

function init(){
    toDoInput.style.display='none';
    loadName();
}

init();