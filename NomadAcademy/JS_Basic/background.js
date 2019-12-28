const body = document.querySelector("body");

// 배경이미지 갯수만큼 숫자 입력
const IMG_NUMBER = 5;




// api를 쓴다면 필요한 함수임. 이미지 로드가 끝나면 완료되었다고 알려주는 함수
// function handleImageLoad(){
//     console.log("finished loading");
// }




function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;    
    body.prepend(image);
    image.classList.add("bgImage");
    // image.addEventListener("loadend", handleImageLoad);
}

function genRandom(){
    //  random 난수생성함수 , floor 버림 함수, ceil 올림 함수
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number 
}

function init(){
    const randomNumber = genRandom()
    paintImage(randomNumber)
}

init()