const currentTime = document.querySelector(".currentTime");
const setAlarm = document.querySelector(".setAlarm");
const inputAlarm = document.querySelector(".inputAlarmTime");
const alarmToRing = document.querySelector(".alarmToRing");
const alarmSound = new Audio("alarmSound.mp3");
let alarmIsSet = false;

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

setAlarm.addEventListener("click", () => {
  let alarmTime = inputAlarm.value;
  if (alarmTime === "") {
    alert("Enter correct value of alarm");
    return;
  } else {
    alarmIsSet = !alarmIsSet;
    if (alarmIsSet === true) {
      alarmToRing.textContent = alarmTime;
      inputAlarm.style.display = "none";
      alarmToRing.style.display = "block";
      index = setInterval(checkAlarm, 200);
    } else {
      defaultStyles();
    }
  }

  if (alarmIsSet === false) {
    setAlarm.textContent = "Set alarm";
  } else {
    setAlarm.textContent = "Cancel";
  }
});

const defaultStyles = () => {
  alarmToRing.textContent = null;
  inputAlarm.style.display = "block";
  alarmToRing.style.display = "none";
  setAlarm.textContent = "Set alarm";
};

const checkAlarm = () => {
  if (alarmIsSet === true) {
    if (`${inputAlarm.value}:00` === currentTime.textContent) {
      alarmSound.play();
      alarmIsSet = false;
      defaultStyles();
    } else return;
  } else return;
};
