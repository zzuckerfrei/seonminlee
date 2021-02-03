const weather = document.querySelector(".js-weather");

const API_KEY = "c41c33e2d5548d4d416f0c91c1099f3f";
const COORDS = 'coords';


function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} °C @${place}`;
    }); // then을 쓰는 이유 : 로딩이 될 때 까지 기다리기 위해. then안쓰면 로딩 안되도 다음으로 넘어감

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){ 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    // 이것도 위와 같은 표현임. 자바스크립트에서는
    //const coordsObj = {
    //     latitude,
    //     longitude
    // };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("위치 못찾음")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords= JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
};

init();
