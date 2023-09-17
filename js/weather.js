const API_KEY = "56b8928b69aa17903476b625d7b55587";
function ok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const temp = Math.floor(data.main.temp)
        weather.innerText = `${temp} °C / ${data.weather[0].main}`;
        city.innerText = data.name;
        
    });
}
function error(){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(ok,error);