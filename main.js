const currentTime = document.querySelector(".currentTime");
const setAlarm = document.querySelector(".setAlarm");
const inputAlarm = document.querySelector(".inputAlarmTime");

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
  console.log(currentTime.textContent);
  console.log(alarmTime + ":00");

  // check();
  // if(alarmTime === )
});
