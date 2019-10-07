const currentTime = document.querySelector(".currentTime");
const alarmTime = document.querySelector(".alarmSet");
const hourUp = document.querySelector(".hourUp");
const minutesUp = document.querySelector(".minutesUp");
const hourDown = document.querySelector(".hourDown");
const minutesDown = document.querySelector(".minutesDown");
// działaj na inputach value
const inputHours = document.querySelector(".inputHours");
const inputMinutes = document.querySelector(".inputMinutes");
let alarmHour = 12;
let alarmMinutes = 30;

const refreshTime = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let time = `${hours}:${minutes}:${seconds}`;
  currentTime.innerHTML = time;
  setTimeout(refreshTime, 1000);
};

refreshTime();
// zmień na value z inputów
hourUp.addEventListener("click", () => {
  inputHours.value++;
  console.log(inputHours.value);
  if (alarmHour > 23) {
    alarmHour = 0;
  }
  console.log(alarmHour);
  let alarmTimeSet = `${alarmHour}:${alarmMinutes}`;
  alarmTime.innerHTML = alarmTimeSet;
});

minutesUp.addEventListener("click", () => {
  alarmMinutes += 1;
  if (alarmMinutes > 59) {
    alarmMinutes = 0;
  }
  console.log(alarmMinutes);
  let alarmTimeSet = `${alarmHour}:${alarmMinutes}`;
  alarmTime.innerHTML = alarmTimeSet;
});

hourDown.addEventListener("click", () => {
  alarmHour -= 1;
  if (alarmHour < 0) {
    alarmHour = 23;
  }
  console.log(alarmHour);
  let alarmTimeSet = `${alarmHour}:${alarmMinutes}`;
  alarmTime.innerHTML = alarmTimeSet;
});

minutesDown.addEventListener("click", () => {
  alarmMinutes -= 1;
  if (alarmMinutes < 0) {
    alarmMinutes = 59;
  }
  console.log(alarmMinutes);
  let alarmTimeSet = `${alarmHour}:${alarmMinutes}`;
  alarmTime.innerHTML = alarmTimeSet;
});

if (alarmHour < 10) {
  alarmHour = `0${alarmHour}`;
}
if (alarmMinutes < 10) {
  alarmMinutes = `0${alarmMinutes}`;
}

console.log(alarmTimeSet);
