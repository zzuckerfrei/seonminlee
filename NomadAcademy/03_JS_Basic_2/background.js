const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad(){
    console.log("finish");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);

    // image.addEventListener("loadend",handleImgLoad) // api에서 쓴다면 가능한 코드
    
}


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER ) ;
    return number;
}


function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
};

init();
