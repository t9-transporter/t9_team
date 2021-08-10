let lastRotate = 0;

let choice = document.getElementById("field");

let start = document.getElementsByClassName("start-btn");

let arrow = document.getElementsByClassName("tasks");

let date1 = Date.now();
let date2 = new Date("August 10, 2021 17:00:00");
// let date2 = new Date("August 11, 2021 19:30:00");
let deltaRemain = (date2 - date1) / 1000 / 60 / 60;
let deltaDelay = (date1 - date2) / 1000 / 60;
let days = Math.floor(Math.floor(deltaRemain) / 24);
let hours = Math.floor(deltaRemain) - days * 24;
let timer = document.getElementById("timer");
let taskPizza = document.getElementById("taskPizza");
let punishment = document.getElementById("punishment");

let deltaResult = () => {
  date1 < date2
    ? (timer.innerHTML =
        "Осталось: " +
        days +
        " день(дней) " +
        hours +
        " час(ов) " +
        Math.floor((deltaRemain - Math.floor(deltaRemain)) * 60) +
        " минут(ы)")
    : (timer.innerHTML = "Опоздание " + Math.floor(deltaDelay) + " минут(ы)");
};

deltaResult();

let punish = [
  {
    key: 1,
    task: "Каждая минута опоздания = 20 голд каждому, <br /> учитывается цена покупки item-ов",
    timing: 1,
    punishValue: 20,
    finalTask: "Итого каждому голды: ",
  },
  {
    key: 2,
    task: "Каждые 5 минут опоздания = пропуск одного<br /> розыгрыша монетки",
    timing: 5,
    punishValue: 1,
    finalTask: "Итого количество пропуска монеток: ",
  },
  {
    key: 3,
    task: "Каждые 5 минут опоздания = обязательная <br /> покупка одной куры за игру до первых крипов,<br /> если никто не купил до этого",
    timing: 5,
    punishValue: 1,
    finalTask: "Итого количество курьеров в играх: ",
  },
  {
    key: 4,
    task: "Каждые 10 минут опоздания = по одному <br /> обязательному свапу указанного героя по требованию <br />с каждым",
    timing: 10,
    punishValue: 1,
    finalTask: "Итого обязательных свапов с каждым: ",
  },
  {
    key: 5,
    task: "Каждая минута опоздания = минус 1 от результата<br /> жребия (-roll)  на текущую игровую сессию <br />(до последней игры включительно)",
    timing: 1,
    punishValue: 1,
    finalTask: "Итого ролл на сегодня уменьшен на: ",
  },
  {
    key: 6,
    task: "Каждые 5 мин опоздания = обязательная покупка<br /> по одному варду  за игру каждому до первых крипов.<br /> Нет дешевого - покупай дорогой",
    timing: 5,
    punishValue: 1,
    finalTask: "Итого количество покупки вардов в играх каждому: ",
  },
  {
    key: 7,
    task: "Каждые 2 мин опоздания = за одну игру<br /> рассказать минимум один анекдот",
    timing: 2,
    punishValue: 1,
    finalTask: "Итого анекдотов на сегоня: ",
  },
  {
    key: 8,
    task: "Ну ты попал... Каждые 15 мин опоздания =<br /> обязательное выполнение по запросу за игру любого желания<br /> каждому (в игре). Однако, желание не должно иметь<br /> критического влияния на игру (купить куру, купить 1 вард,<br /> 1 стак пыли, принести вещи с базы - норм примеры).<br /> Принятие решение по критичности - путем голосования =)",
    timing: 15,
    punishValue: 1,
    finalTask: "Итого желайний каждому: ",
  },
  {
    key: 9,
    task: "Каждые 15 мин опоздания = обязательный вард<br /> минимум на одной руне в течении всей игры. Исключение <br />- по согласованию с выгодоприобретателем",
    timing: 15,
    punishValue: 1,
    finalTask: "Итого игр с вардами на руне: ",
  },
  {
    key: 10,
    task: "Каждые 5 мин опоздания = обязательная покупка <br />по одному ТП  за игру каждому до первых крипов или по<br /> согласию с получателем  в любой другой момент игры. ",
    timing: 5,
    punishValue: 1,
    finalTask: "Итого игр с покупкой телепортов каждому: ",
  },
  {
    key: 11,
    task: "Каждые 20 мин опоздания = обязательная сборка <br />guardian-greaves  за игру 1-м артом, и использование<br /> по запросу в течении игры (или по другому согласованию с выгодоприобретателем)",
    timing: 20,
    punishValue: 1,
    finalTask: "Итого игр с покупкой гривсов: ",
  },
  { key: 12, task: "Ладно, сегодня мы тебя прощаем." },
];

let pizza = () => {
  deltaDelay > 60
    ? (punish[11].task =
        "Ты сегодня побил все рекорды...<br /> Никакого прощения, только хардкор!<br /> С тебя заказ по оной любой пицце Dominos <br />каждому немедленно!")
    : "Ладно, сегодня мы тебя прощаем.";
  deltaDelay > 60
    ? (taskPizza.innerHTML = "ВЫРЕЗАНО ЦЕНЗУРОЙ!")
    : "Ты везунчик! &#128582";
};
pizza();

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

  let random = rand / 30;

  (random > 89) & (random < 100)
    ? setTimeout(
        () =>
          (document.getElementById("roll").innerHTML =
            "BIG ROLL SHOT " + rand / 30),
        500
      )
    : setTimeout(
        () => (document.getElementById("roll").innerHTML = "roll " + rand / 30),
        500
      );

  result.value = ((lastRotate / 30) % 12) + 1;
  let num = result.value;

  setTimeout(
    () =>
      (document.getElementById("result").innerHTML = "Наказание номер: " + num),
    3000
  );

  for (let i = 1; i < 13; i++) {
    if (i == num) {
      setTimeout(() => {
        document.getElementById("punish").innerHTML = punish[i - 1].task;
        start[0].disabled = false;
      }, 3500);
    }
  }

  let calc = Math.floor(Math.floor(deltaDelay) / punish[num - 1].timing);
  let calcPunish = 0;

  calc > 1 ? (calcPunish = calc) : (calcPunish = 1);

  punishment.innerHTML = "";

  if (date1 > date2) {
    num < 12
      ? setTimeout(() => {
          punishment.innerHTML =
            punish[num - 1].finalTask +
            punish[num - 1].punishValue * calcPunish;
        }, 4000)
      : (punishment.innerHTML = "");
  }

  return false;
});

// 1 указание времени до старта/опоздания, через что/если                      ok
// 1.1 вывод наказания итого с зависимостью от времени                         ok
// 1.2 если нет опозания - нет наказаня от времени                             ok
// 2 выбор 12 наказания / опоздание больше часа                                ok
// 2.1 добавление наказания 13 пицца                                           ok
// 3 вывод  информации ролл больше 90                                          ok
// 3.1 анимация ролл больше 90
// 4 ролл равен 100 - снятие всех наказаний с выводом
// 5 стартовая страница с правилами игры и выбором игры
// 6 анимация загрузка игры с логотипом
// 7 стилизация чтогдекогда
// 8 стилизация поле чудес
// 9 стилизация вывода информации и наказаний
// 10 рендер таймера онлайн
// 10.1 добавление цифры дней до старта                                        ok
// 11 добавление бэка с выбором даты старта по паролю/по 3 паролям
// 12 добавление информации о обновлении и планах на будующие изменения
// 13 мобильная версия игры
// 14 убрать лишний код и logi
