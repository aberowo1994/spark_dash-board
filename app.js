"use strict";
// working on the chart
let lineChart = document.getElementById("myChart");
const labels = ["01/02", "02/02", "03/02", "04/02", "05/02", "06/02", "07/02"];
const data = {
  labels: labels,
  label: false,
  datasets: [
    {
      data: [95, 93, 50, 55, 80, 68, 85, 40, 100],
      fill: false,
      backgroundColor: "#E31A1C",
      borderColor: "#E31A1C",
      borderWidth: 1.5,
    },
  ],
};
const myChart = new Chart(lineChart, {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false, //the legend will disappear;
      },
    },
  },
});

// working on the menu bar

let hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
let main = document.querySelector("main");

hamburger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  main.classList.toggle("active--2");
});

// darkmode code starts here
let body = document.querySelector("body");
let switchBtn = document.querySelector(".toggle");
switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark--theme");
  if (!body.classList.contains("dark--theme")) {
    switchBtn.style.marginLeft = "0px";
  } else {
    switchBtn.style.marginLeft = "30px";
    /* transform: translate(0px, -1px); */
    switchBtn.style.transform = "translate(8px, -1px)";
  }
});
