// 만드는 순서 0 먼저 다음 3개의 변수 선언을 가장 먼저 했다
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector(".js-toDoList");



const TODOS_LS = "toDos";

// todo가 생성될 때마다 toDos라는 array에 추가시킴
let toDos = [];



function filterFn(toDo){
    return toDo.id ===1 
}

function deleteToDo(event){
    // 버튼의 부모가 누구인지 찾아서 (parentNode)
    // removeChild()함수로 삭제함
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    
    // filter는 forEach와 유사한 함수
    // 모든 array값을 대상으로 각각 함수를 실행시키고, true값만 골라서 array로 반환해줌
    const claenToDos = toDos.filter(function(toDo){
        // console.log(toDo.id, li.id); // 자료형 확인 
        return toDo.id !== parseInt(li.id); 
        
    });
    // toDos는 삭제이전array, cleanToDos는 삭제 후 array
    // 여기서 toDos가 const이므로 변경이 불가함. 따라서 let으로 바꿔줌
    toDos = claenToDos;
    // array를 교체했으면 save해줌
    saveToDos();
}


// for idx, val in enumerate(dict_a):
//     val.id = idx



// toDos(array자료형)를 가져와서 로컬에 저장하는 일을 하는 함수
// localstorage에는 string밖에 저장이 안됨. js data는 저장 불가능 그래서 parse해줘야함
// 그 parser가 JSON.stringify 이다 js object를 string으로 바꿔주는 기능 
// * JSON = 'Java Scripts Object Notation'
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    
}
    
// 만드는 순서 4
function paintToDo(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delbtn.addEventListener('click', deleteToDo);
    delbtn.innerHTML = "❌";
    span.innerText = text
    li.appendChild(delbtn);
    li.appendChild(span);  // appendChild 뭔가를 그의 father element안에 넣는 함수 
    
    li.id = newId; // li에 id를 추가하는 것. 나중에 delete할때 id기준으로 삭제하기 위해
    toDoList.appendChild(li); // li를 ul에 넣는 작업
    
    // obj하나를 만들고 push로 array에 추가
    const toDoObj = {
        text : text,
        id : newId,
    }
    toDos.push(toDoObj); // array에 추가
    saveToDos()
}

// 만드는 순서 3
function handleSubmit(event){
    event.preventDefault(); // submit후 자동으로 refresh되는 것을 막는 함수
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // input입력창을 초기화시키는 것
}




// 만드는 순서 2
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos !== null){
        // .parse는 object로 parsing해주는 함수
        // 마치 크롬의 jsonparser로 보는 것 처럼 {} 이렇게 보여줌
        const parsedToDos = JSON.parse(loadedToDos) 

        // forEach 는 array에 담긴 것에 대해 각각 한 번씩 함수를 실행시키는 함수. apply lambda 같은 느낌인듯
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
            
        });
        
    } else {

    }
}

// 만드는 순서 1
function init(){
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()



/* 
delete 하는 방법
1. local storage에서 todo하나를 지움
2. 지운 array를 저장해야함
3. HTML에서도 todo하나를 지움
*/