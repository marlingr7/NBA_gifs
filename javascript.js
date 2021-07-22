let btnRight = document.getElementById("btn-right");
let btnLeft = document.getElementById("btn-left");

let first = document.getElementById("first");
let sec = document.getElementById("sec");
let third = document.getElementById("third");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let eleven = document.getElementById("eleven");
let twelve = document.getElementById("twelve");

let cont = [
  first,
  sec,
  third,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
];
let elementDisplay = [];

let img = document.getElementsByClassName("img");

btnRight.addEventListener(
  "click",
  () => {
    for (k = 0; k < img.length; k++) {
      img[k].style.width = "52%";
      img[k].style.height = "59%";
      img[k].style.marginTop = "12%";
    }
    for (let j = 0; j < cont.length; j++) {
      let elementStyle = window.getComputedStyle(cont[j]);
      elementDisplay.push(elementStyle.getPropertyValue("display"));
    }
    for (let i = 0; i < cont.length; i++) {
      if (elementDisplay[i] == "flex" && i != cont.length - 1) {
        cont[i].style.animation = "fadeOffLeft 0.3s";
        cont[i].style.animationFillMode = "forwards";
        setTimeout(() => {
          cont[i].style.display = "none";
        }, 100);
        cont[i + 1].style.animation = "fadeInLeft 0.3s";
        cont[i + 1].style.animationFillMode = "forwards";
        cont[i + 1].style.display = "flex";
      }
    }
    elementDisplay = [];
  },
  false
);

btnLeft.addEventListener(
  "click",
  () => {
    for (let j = 0; j < cont.length; j++) {
      let elementStyle = window.getComputedStyle(cont[j]);
      elementDisplay.push(elementStyle.getPropertyValue("display"));
    }
    for (let i = 0; i < cont.length; i++) {
      if (elementDisplay[i] == "flex" && i != 0) {
        cont[i].style.animation = "fadeOffRight 0.3s";
        cont[i].style.animationFillMode = "forwards";
        setTimeout(() => {
          cont[i].style.display = "none";
        }, 100);
        cont[i - 1].style.animation = "fadeInRight 0.3s";
        cont[i - 1].style.animationFillMode = "forwards";
        cont[i - 1].style.display = "flex";
      }
    }
    elementDisplay = [];
  },
  false
);
