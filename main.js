const currentTime = document.querySelector(".currentTime");

const refreshTime = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  } else if (minutes < 10) {
    minutes = `0${minutes}`;
  } else if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let time = `${hours}:${minutes}:${seconds}`;
  currentTime.innerHTML = time;
  setTimeout(refreshTime, 1000);
};

refreshTime();
