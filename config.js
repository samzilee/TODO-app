const todoText = document.getElementById("todoText");
const todoTime = document.getElementById("time");
const display = document.getElementById("display");
const saveBtn = document.getElementById("saveBtn");
const redZone = document.getElementById("redZone");
const resetBtn = document.getElementById("resetBtn");

display.innerHTML = localStorage.getItem("display");

// let myTime = Array.from(document.getElementsByClassName("time"));
// let mT = [];

const saveTextAndDate = () => {
  if (todoText.value === "" || todoTime.value === "") {
    redZone.innerText = "Todo or Time is missing";
    redZone.style.color = "red";
  } else {
    text = todoText.value;
    time = todoTime.value;

    let todoList = [
      {
        WhatTodo: text,
        TimeTodo: time,
      },
    ];

    todoList.map((index) => {
      display.insertAdjacentHTML(
        "beforeend",
        `<p>Todo: <span class="todo">${index.WhatTodo}</span>, Time: <span class="time">${index.TimeTodo}</span></p>`
      );
      todoText.value = "";
      todoTime.value = "";

      redZone.innerText = "TODO";
      redZone.style.color = "";
      localStorage.setItem("display", display.innerHTML);
    });

    // myTime.map((index, num) => {
    //   mT.Time = myTime[num].innerText;
    // });
    // TodoPop(currentTime, mT.Time, `it works`);
    // console.log(mT.Time);
    // console.log(currentTime);
    // console.log(myTime);
  }
};

const resetAll = () => {
  display.innerHTML = "";
  localStorage.removeItem("display");
  myTime = [];
};

saveBtn.addEventListener("click", saveTextAndDate);
resetBtn.addEventListener("click", resetAll);

// let time = new Date();
// let hours = time.getHours();
// let minutes = time.getMinutes();
// let currentTime = 0 + hours.toString() + ":" + minutes.toString();

// // mT.map((id, num) => {
// //   let time = mT[num];
// // });

// function TodoPop(mainTime, TodoTime, message) {
//   setInterval(() => {
//     if (mainTime === TodoTime) {
//       alert(message);
//     }
//   }, 1000);
// }
