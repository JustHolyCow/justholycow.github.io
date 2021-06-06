// Do some stuff when page hmtl page is launched
$(document).ready(function () {

  $("#headerTitle").hide(300).show(1500);
  // calling show food menu function
  // showClock();
});

/*----------------------------------------------------------------------------*/
/* возвращает первый элемент в документе,соответствующий указанному селектору*/
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const WORD = document.querySelector("#headerTitle");
//Обьект, содержащий значение даты и времени в данный момент
var date = new Date();

//Значение часа
let hr = date.getHours();
//Значение минут
let min = date.getMinutes();
//Значение часов
let sec = date.getSeconds();

//console.log("The curent time is: ", hr + ":" + min + ":" + sec);

// let convert hour, minute and seconds into degree to be display on the clockbox
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);//перевод часов в градусы с учетом минут
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);//перевод минут в градусы с учетом секунд
let secPosition = sec * 360 / 60; //перевод секунд в градусы
var i = 0; // для задания периода

function runTheClock() {

  if(secPosition >= (270+i) && secPosition <= (330+i)  ) {
  	//alert("ВРЕМЯ ОТЧМСЛЕНИЙ!!!");
  	WORD.innerHTML="Время отчислений!!!";
  	WORD.style.color = "red";
  }
  else {
    WORD.innerHTML="Часы";
    WORD.style.color = "black";
    if(secPosition == (360+i) ){
      i+=360;
    }
    
  }
  hrPosition += 3/360;
  minPosition += 6/60;
  secPosition += 6;
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  

}


// Запускает функцию runTheClock каждые 1000 миллисекунд
var interval = setInterval(runTheClock, 1000);

/*----------------------------------------------------------------------------*/
