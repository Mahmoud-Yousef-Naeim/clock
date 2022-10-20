let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");





setInterval(()=> {
   let secondsValue = new Date().getSeconds() / 60 * 360;
   let minutesValue = new Date().getMinutes() / 60 * 360;
   let hoursValue = new Date().getHours() / 12 * 360 ;
   seconds.style = `transform: rotate(${secondsValue}deg)`
   minutes.style = `transform: rotate(${minutesValue}deg)`
   hours.style = `transform: rotate(${hoursValue}deg)`
},1000)




