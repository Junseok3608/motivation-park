const runningForm = document.getElementById("running-form");
const runningInputKm = document.getElementById("running-input__km");
const runningInputTime = document.getElementById("running-input__time");
const runningList = document.querySelector(".running-list");

const RUNNING_KEY = "running";

let runs = [];

const saveRuns = function () {
  localStorage.setItem(RUNNING_KEY, JSON.stringify(runs));
};

const deleteRun = function (e) {
  const li = e.target.parentElement;
  li.remove();
  runs = runs.filter((run) => run.id !== parseInt(li.id));
  saveRuns();
};

const paintRun = function (newRun) {
  const li = document.createElement("li");
  li.id = newRun.id;
  const spankm = document.createElement("span");
  spankm.innerText = `목표: ${newRun.textkm}km를`;
  const spantime = document.createElement("span");
  spantime.innerText = ` ${newRun.texttime}시간 안에!`;
  const btn = document.createElement("button");
  btn.innerHTML = `☑`;
  btn.addEventListener("click", deleteRun);
  li.appendChild(spankm);
  li.appendChild(spantime);
  li.appendChild(btn);
  runningList.appendChild(li);
};

const handleRunSubmit = function (e) {
  e.preventDefault();
  const newRunKm = runningInputKm.value;
  const newRunTime = runningInputTime.value;
  runningInputKm.value = "";
  runningInputTime.value = "";
  const newRunObj = {
    textkm: newRunKm,
    texttime: newRunTime,
    id: Date.now(),
  };
  runs.push(newRunObj);
  paintRun(newRunObj);
  saveRuns();
};

runningForm.addEventListener("submit", handleRunSubmit);

const savedRuns = localStorage.getItem(RUNNING_KEY);
if (savedRuns !== null) {
  const parsedRuns = JSON.parse(savedRuns);
  runs = parsedRuns;
  parsedRuns.forEach(paintRun);
}
