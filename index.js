let lastRotate = 0;

let choice = document.getElementById("field");

let start = document.getElementsByClassName("start-btn");
//Вращение стрелки
// let arrow = document.getElementsByClassName("arrow");
//Вращение барабана
let arrow = document.getElementsByClassName("tasks");

let punish = [
  {
    key: 1,
    task: "каждая минута опоздания = 20 голд каждому, <br /> учитывается цена покупки item-ов",
  },
  {
    key: 2,
    task: "каждые 5 минут опоздания = пропуск <br /> одного розыгрыша монетки (rmk учитвается)",
  },
  {
    key: 3,
    task: "каждые 5 минут опоздания = обязательная покупка одной <br /> куры за игру до первых крипов, если никто не купил до этого",
  },
  {
    key: 4,
    task: "каждые 10 минут опоздания = по одному  <br /> обязательному свапу указанного героя по требованию с каждым",
  },
  {
    key: 5,
    task: "каждая минута опоздания = минус 1 от результата жребия (-roll) <br /> на текущую игровую сессию (до последней игры включительно)",
  },
  { key: 6, task: "текст 6" },
  { key: 7, task: "текст 7" },
  { key: 8, task: "текст 8" },
  { key: 9, task: "текст 9" },
  { key: 10, task: "текст 10" },
  { key: 11, task: "текст 11" },
  { key: 12, task: "текст 12" },
];

start[0].addEventListener("click", () => {
  start[0].disabled = true;
  document.getElementById("punish").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  let rand = Math.floor(1 + Math.random() * (100 + 1 - 1)) * 30;

  if (choice.checked === true) {
    arrow = document.getElementsByClassName("tasks");
    arrow[0].style.transform = "rotate(-" + (lastRotate += rand) + "deg)";
  } else {
    lastRotate = 0;
    arrow = document.getElementsByClassName("arrow");
    arrow[0].style.transform = "rotate(" + (lastRotate += rand) + "deg)";
  }
  //Вращение стрелки
  // arrow[0].style.transform = "rotate(" + (lastRotate += rand) + "deg)";

  //Вращение барабана
  // arrow[0].style.transform = "rotate(-" + (lastRotate += rand) + "deg)";

  console.log("roll " + rand / 30);

  result.value = ((lastRotate / 30) % 12) + 1;
  let num = result.value;
  console.log(num);

  setTimeout(
    () =>
      (document.getElementById("result").innerHTML = "Наказание номер: " + num),
    3000
  );

  for (let i = 1; i < 13; i++) {
    if (i == num) {
      console.log(punish[i - 1].task);
      setTimeout(() => {
        document.getElementById("punish").innerHTML = punish[i - 1].task;
        start[0].disabled = false;
      }, 3500);
    }
  }

  return false;
});
