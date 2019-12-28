// 위치를 가져오는 함수들

const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = 'c41c33e2d5548d4d416f0c91c1099f3f'; // openweathermap에서 받은 api key를 의미함



function getWeather(lat, lng){
    // fetch 함수는 데이터를 얻는 방법. 
    // 아마 fetch를 사용해서 response가 생기고 거기서 우리가 진짜로 보고싶은 내용물인 json형식의 데이터를 가져오는 듯 크롤링하는 것 처럼
    // then 함수는 데이터를 완전히 다운받은 후 기다렸다가 실행되도록 하는 기능
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temparature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temparature}   ${place}`
    })
    // console.log(lat, lng)
    // units=metric 으로 화씨온도가 아닌 섭씨온도 사용하기
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // const coordsObj = {
    //     latitude : latitude,  
    //     longitude : longitude,
        
    // };

    // JS 사용팁! 위와 같은 obj생성방법임. 
    // key와 value가 같을 경우 사용할 수 있음
    const coordsObj = {
        latitude,
        longitude,
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}


function askForCoords(){
    // getCurrentPosition은 2개의 인자 사용. 
    // 1. 좌표를 가져오는데 성공했을 때 처리하는 함수
    // 2. 좌표 가져오기를 실패했을 때 처리하는 함수
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
    
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    // 위치정보가 null이라면~
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
        
    }
}

function init(){
    loadCoords();

}

init()