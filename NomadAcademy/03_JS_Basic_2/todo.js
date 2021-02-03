const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';
let toDos = []; // 상수아닌 변수
let newIdNumber = 1;

function filterFn(toDo){
    return toDo.id !==1

}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); // appendchild의 반대. 클릭한 li를 toDoList에서 삭제함 -> 리스트에서지움
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // int 형변환
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = newIdNumber += 1;

    span.innerText = text;
    // delbtn.innerText = "❌";
    delbtn.innerText = "✔";
    delbtn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    toDoList.appendChild(li); // li에 span과  delbtn을 포장해서 담로 toDoList에 추가함

    const loadedToDos = {
        text : text,
        id : newId
    };
    toDos.push(loadedToDos);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 화면 초기화

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){ //foreach는 array 를 위한 for문같은거
            paintToDo(toDo.text);
        });
    } 
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();