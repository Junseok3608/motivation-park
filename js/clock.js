const time = document.getElementById("time");
const greetingTime = document.getElementById("greeting-time");

const getClock = function () {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;
  greetingTime.innerText = `현재 시간은 달리기 좋은 ${hours}시 ${minutes}분`;
};
getClock();
setInterval(getClock, 1000);
