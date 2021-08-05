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
    task: "Каждая минута опоздания = 20 голд каждому, <br /> учитывается цена покупки item-ов",
  },
  {
    key: 2,
    task: "Каждые 5 минут опоздания = пропуск одного<br /> розыгрыша монетки",
  },
  {
    key: 3,
    task: "Каждые 5 минут опоздания = обязательная <br /> покупка одной куры за игру до первых крипов,<br /> если никто не купил до этого",
  },
  {
    key: 4,
    task: "Каждые 10 минут опоздания = по одному <br /> обязательному свапу указанного героя по требованию <br />с каждым",
  },
  {
    key: 5,
    task: "Каждая минута опоздания = минус 1 от результата<br /> жребия (-roll)  на текущую игровую сессию <br />(до последней игры включительно)",
  },
  {
    key: 6,
    task: "Каждые 5 мин опоздания = обязательная покупка<br /> по одному варду  за игру каждому до первых крипов.<br /> Нет дешевого - покупай дорогой",
  },
  {
    key: 7,
    task: "Каждые 2 мин опоздания = за одну игру<br /> рассказать минимум один анекдот",
  },
  {
    key: 8,
    task: "Ну ты попал... Каждые 15 мин опоздания =<br /> обязательное выполнение по запросу за игру любого желания<br /> каждому (в игре). Однако, желание не должно иметь<br /> критического влияния на игру (купить куру, купить 1 вард,<br /> 1 стак пыли, принести вещи с базы - норм примеры).<br /> Принятие решение по критичности - путем голосования =)",
  },
  {
    key: 9,
    task: "Каждые 20 мин опоздания = обязательный вард<br /> минимум на одной руне в течении всей игры. Исключение <br />- по согласованию с выгодоприобретателем",
  },
  {
    key: 10,
    task: "Каждые 5 мин опоздания = обязательная покупка <br />по одному ТП  за игру каждому до первых крипов или по<br /> согласию с получателем  в любой другой момент игры. ",
  },
  {
    key: 11,
    task: "Каждые 20 мин опоздания = обязательная сборка <br />guardian-greaves  за игру 1-м артом, и использование<br /> по запросу в течении игры (или по другому согласованию с выгодоприобретателем)",
  },
  { key: 12, task: "Ладно, сегодня мы тебя прощаем." },
];

start[0].addEventListener("click", () => {
  start[0].disabled = true;
  document.getElementById("punish").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("roll").innerHTML = "";
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

  setTimeout(
    () => (document.getElementById("roll").innerHTML = "roll " + rand / 30),
    500
  );
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

  let date1 = Date.now();
  let date2 = new Date("August 05, 2021 20:00:00");
  let deltaRemain = (date2 - date1) / 1000 / 60 / 60;
  let deltaDelay = (date2 - date1) / 1000 / 60;
  console.log(
    "Осталось " +
      Math.floor(deltaRemain) +
      ":" +
      Math.floor((deltaRemain - Math.floor(deltaRemain)) * 60)
  );

  console.log("Опоздание " + Math.floor(deltaDelay) + " минут");

  return false;
});
