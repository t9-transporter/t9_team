let lastRotate = 0;

let choice = document.getElementById("field");

let start = document.getElementsByClassName("start-btn");

let arrow = document.getElementsByClassName("tasks");

let date1 = Date.now();
let date2 = new Date("August 20, 2021 22:00:00");
let deltaRemain = (date2 - date1) / 1000 / 60 / 60;
let deltaDelay = (date1 - date2) / 1000 / 60;
// let deltaDelayFinal = 0;
let days = Math.floor(Math.floor(deltaRemain) / 24);
let hours = Math.floor(deltaRemain) - days * 24;
let timer = document.getElementById("timer");
let timerHome = document.getElementById("timerHome");
let taskPizza = document.getElementById("taskPizza");
let punishment = document.getElementById("punishment");
let homeBtn1 = document.getElementById("confirmBtn1");
let homeBtn2 = document.getElementById("confirmBtn2");
let home = document.getElementsByClassName("home");
let loader = document.getElementsByClassName("loader");
let content = document.getElementsByClassName("content");

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

let homeDeltaResult = () => {
  let date1 = Date.now();
  let deltaRemain = (date2 - date1) / 1000 / 60 / 60;
  let deltaDelay = (date1 - date2) / 1000 / 60;
  let days = Math.floor(Math.floor(deltaRemain) / 24);
  let hours = Math.floor(deltaRemain) - days * 24;
  date1 < date2
    ? (timerHome.innerHTML =
        "Осталось: " +
        days +
        " день(дней) " +
        hours +
        " час(ов) " +
        Math.floor((deltaRemain - Math.floor(deltaRemain)) * 60) +
        " минут(ы)")
    : (timerHome.innerHTML =
        "Опоздание " + Math.floor(deltaDelay) + " минут(ы)");
};

homeDeltaResult();

setInterval(() => {
  homeDeltaResult();
}, 30000);

homeBtn1.addEventListener("click", () => {
  home[0].classList.toggle("none");
  loader[0].classList.toggle("grid");
  setTimeout(() => {
    loader[0].classList.toggle("grid");
    content[0].classList.toggle("grid");
  }, 6000);
});

homeBtn2.addEventListener("click", () => {
  home[0].classList.toggle("none");
  loader[0].classList.toggle("grid");
  setTimeout(() => {
    loader[0].classList.toggle("grid");
    content[0].classList.toggle("grid");
  }, 6000);
});

homeBtn2.addEventListener("mouseover", () => {
  homeBtn2.innerHTML = "Точно согласен";
});
homeBtn2.addEventListener("mouseout", () => {
  homeBtn2.innerHTML = "Не согласен";
});

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
    task: "Каждая минута опоздания = минус 1 от<br /> результата жребия (-roll)  на текущую<br /> игровую сессию (до последней игры<br /> включительно)",
    timing: 1,
    punishValue: 1,
    finalTask: "Итого ролл на сегодня уменьшен на: ",
  },
  {
    key: 6,
    task: "Каждые 5 мин опоздания = обязательная<br /> покупка по одному варду  за игру каждому<br /> до первых крипов. Нет дешевого<br /> - покупай дорогой",
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
    task: "Ну ты попал... Каждые 15 мин опоздания =<br /> обязательное выполнение по запросу за игру<br /> любого желания каждому (в игре). Однако,<br /> желание не должно иметь<br /> критического<br /> влияния на игру (купить куру, купить 1 вард,<br /> 1 стак пыли, принести вещи с базы - норм<br /> примеры). Принятие решение по критичности - <br />путем голосования =)",
    timing: 15,
    punishValue: 1,
    finalTask: "Итого желаний каждому: ",
  },
  {
    key: 9,
    task: "Каждые 15 мин опоздания = обязательный вард<br /> минимум на одной руне в течении всей игры.<br /> Исключение - по согласованию с<br /> выгодоприобретателем",
    timing: 15,
    punishValue: 1,
    finalTask: "Итого игр с вардами на руне: ",
  },
  {
    key: 10,
    task: "Каждые 5 мин опоздания = обязательная покупка <br />по одному ТП  за игру каждому до первых крипов<br /> или по согласию с получателем  в любой другой<br /> момент игры. ",
    timing: 5,
    punishValue: 1,
    finalTask: "Итого игр с покупкой телепортов каждому: ",
  },
  {
    key: 11,
    task: "Каждые 20 мин опоздания = обязательная сборка <br />guardian-greaves  за игру 1-м артом, и использование<br /> по запросу в течении игры (или по другому<br /> согласованию с выгодоприобретателем)",
    timing: 20,
    punishValue: 1,
    finalTask: "Итого игр с покупкой гривсов: ",
  },
  { key: 12, task: "Ладно, сегодня мы тебя прощаем." },
];

//Опоздание больше часа?
let pizza = () => {
  deltaDelay > 60
    ? (punish[11].task =
        "Ты сегодня побил все рекорды...<br /> Никакого прощения, только хардкор!<br /> С тебя заказ по одной любой пицце Dominos <br />каждому немедленно! <br /> https://dominos.by/pizza/les")
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
  // let rand = 3000;
  // let rand = 330;

  if (choice.checked === true) {
    arrow = document.getElementsByClassName("tasks");
    arrow[0].style.transform = "rotate(-" + (lastRotate += rand) + "deg)";
  } else {
    lastRotate = 0;
    arrow = document.getElementsByClassName("arrow");
    arrow[0].style.transform = "rotate(" + (lastRotate += rand) + "deg)";
  }

  let random = rand / 30;

  result.value = ((lastRotate / 30) % 12) + 1;
  let num = result.value;

  let calc = Math.floor(Math.floor(deltaDelay) / punish[num - 1].timing);
  let calcPunish = 0;

  calc > 1 ? (calcPunish = calc) : (calcPunish = 1);

  random === 100
    ? // 1) Выпал рандом 100
      (setTimeout(
        () =>
          (document.getElementById("roll").innerHTML =
            "OMG! НЕВЕРОЯТНО! ROLL <a class=number>" + rand / 30 + "</a>"),
        500
      ),
      date1 > date2
        ? // 1.1) Есть опоздание
          setTimeout(() => {
            document.getElementById("result").innerHTML =
              "Тебе сегодня нереально повезло,<br /> you are forgiven =)";
            start[0].disabled = false;
          }, 3000)
        : // 1.2) Нет опоздания
          setTimeout(() => {
            punishment.innerHTML = "НЕТ НАКАЗАНИЯ, рано еще =)";
            start[0].disabled = false;
          }, 3000))
    : // 2.1) Выпал рандом меньше 100
      ((random > 89) & (random < 100)
        ? // 2.1.1) Выпал рандом от 90 до 99
          setTimeout(
            () =>
              (document.getElementById("roll").innerHTML =
                "BIG ROLL SHOT  <a class=number>" + rand / 30 + "</a>"),
            500
          )
        : // 2.1.2) Выпал рандом от 1 до 89
          setTimeout(
            () =>
              (document.getElementById("roll").innerHTML =
                "roll <a class=number>" + rand / 30 + "</a>"),
            500
          ),
      // 2.2) Есть ли опоздание?
      date1 > date2
        ? // 2.2.1 Есть опоздание
          num < 12
          ? // 2.2.1.1) Наказания 1 - 11
            (setTimeout(
              () =>
                (document.getElementById("result").innerHTML =
                  "Наказание номер: " + num),
              3000
            ),
            setTimeout(() => {
              document.getElementById("punish").innerHTML =
                punish[num - 1].task;
              start[0].disabled = false;
            }, 3500),
            setTimeout(() => {
              punishment.innerHTML =
                punish[num - 1].finalTask +
                "<a class=number>" +
                punish[num - 1].punishValue * calcPunish +
                "</a>";
            }, 4000))
          : // 2.2.1.2) Халява/жесть 12
            (setTimeout(
              () =>
                (document.getElementById("result").innerHTML =
                  "Наказание номер: " + num),
              3000
            ),
            setTimeout(() => {
              document.getElementById("punish").innerHTML =
                punish[num - 1].task;
              start[0].disabled = false;
            }, 3500))
        : // 2.2.2 Нет опоздания
          setTimeout(() => {
            punishment.innerHTML = "НЕТ НАКАЗАНИЯ, рано еще =)";
            start[0].disabled = false;
          }, 3000));

  punishment.innerHTML = "";
  return false;
});

// 1 указание времени до старта/опоздания, через что/если                      ok
// 1.1 вывод наказания итого с зависимостью от времени                         ok
// 1.2 если нет опозания - нет наказаня от времени                             ok
// 2 выбор 12 наказания / опоздание больше часа                                ok
// 2.1 добавление наказания 13 пицца                                           ok
// 3 вывод  информации ролл больше 90                                          ok
// 3.1 анимация ролл больше 90
// 4 ролл равен 100 - снятие всех наказаний с выводом                          ok
// 4.1 Анимация ролл = 100
// 5 стартовая страница с правилами игры                                       ok
// 5.1 выбор игры на стартовой странице
// 6 анимация загрузка игры с логотипом                                        ok
// 7 стилизация чтогдекогда
// 8 стилизация поле чудес                                                     ok
// 9 стилизация вывода информации и наказаний                                  ok
// 10 рендер таймера онлайн                                                    ok
// 10.1 добавление цифры дней до старта                                        ok
// 11 добавление бэка с выбором даты старта по паролю/по 3 паролям
// 12 добавление информации о обновлении и планах на будующие изменения
// 13 мобильная версия игры
// 13.1 мобильная версия стартовой страницы и анимации
// 14 убрать лишний код и logi
// 15 добавление аудио для игры
// 16 перевести колесо на грид
// 17 наказания загружаются в колесо через map
// 18 колесо наполняется наказаниями рандомно
// 18.1 анимация наполнения колеса на главной
// 19 суперигра
// 20 черный ящик
