const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const newYear = "1 Jan 2022";

const countDown = () => {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = timeFormat(days);
  hoursEl.innerHTML = timeFormat(hours);
  minutesEl.innerHTML = timeFormat(minutes);
  secondsEl.innerHTML = timeFormat(seconds);
};

const timeFormat = (time) => {
  return time < 10 ? `0${time}` : time;
};

countDown();
setInterval(countDown, 1000);
