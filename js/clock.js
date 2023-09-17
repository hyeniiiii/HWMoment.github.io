const clock = document.querySelector("#center-container h1#clock");

function nowClock(){
    const day = new Date();
    const hour =  String(day.getHours()).padStart(2,"0");
    const min =  String(day.getMinutes()).padStart(2,"0");
    const sec =  String(day.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour} : ${min} : ${sec}`
}
nowClock();
setInterval(nowClock,1000);
