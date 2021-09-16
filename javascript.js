let url =
  "https://api.giphy.com/v1/gifs/search?api_key=g8dBw4OTVzo50XvTEhgxPZImzQBOggmK&q=nba&limit=12&offset=0&rating=g&lang=en";

let img = document.getElementsByClassName("img");
let backImg = document.getElementsByClassName("princ-img");

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      for (let j = 0; j < data.data.length; j++) {
        for (let i = 0; i < data.data.length; i++) {
          if (i + j < 12) {
            img[j * 12 + i].style.backgroundImage =
              "url(" + data.data[i + j].images.original.url + ")";
          } else {
            img[j * 12 + i].style.backgroundImage =
              "url(" + data.data[i + j - 11].images.original.url + ")";
          }
          backImg[i].style.backgroundImage =
            "url(" + data.data[i].images.original.url + ")";
        }
      }
    });
  })
  .catch(function (err) {
    alert("Fetch Error :-S", err);
  });

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
let princ = document.getElementById("princ");

let back = document.getElementsByClassName("back");
let border = document.getElementsByClassName("border");
let line = document.getElementsByClassName("line");

let backAnimation = [
  "back1 2s",
  "back2 2s",
  "back3 2s",
  "back4 2s",
  "back5 2s",
  "back6 2s",
  "back1 2s",
  "back2 2s",
  "back3 2s",
  "back4 2s",
  "back5 2s",
  "back6 2s",
];

let lineAnimation = [
  "line1 2s",
  "line2 2s",
  "line3 2s",
  "line4 2s",
  "line5 2s",
  "line6 2s",
  "line1 2s",
  "line2 2s",
  "line3 2s",
  "line4 2s",
  "line5 2s",
  "line6 2s",
];

let borderAnimation = [
  "border1 2s",
  "border2 2s",
  "border3 2s",
  "border4 2s",
  "border5 2s",
  "border6 2s",
  "border1 2s",
  "border2 2s",
  "border3 2s",
  "border4 2s",
  "border5 2s",
  "border6 2s",
];

let cont = [
  princ,
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

function animatePrinc() {
  setTimeout(() => {
    backImg[0].className += " moveImg1";
    backImg[1].className += " moveImg2";
    backImg[2].className += " moveImg3";
    backImg[3].className += " moveImg4";
  }, 0);

  for (let i = 0; i < backImg.length - 1; i++) {
    var count = 1500 * (i + 1);
    var iOne;
    var iTwo;
    var iThree;
    var iFour;
    setTimeout(() => {
      back[0].style.animation = backAnimation[i];
      back[1].style.animation = backAnimation[i];
      line[0].style.animation = lineAnimation[i];
      line[1].style.animation = lineAnimation[i];
      border[0].style.animation = borderAnimation[i];
      border[1].style.animation = borderAnimation[i];
      backImg[i].classList.replace("moveImg1", "hidden");
      if (i < backImg.length - 4) {
        backImg[i + 3].classList.remove("moveImg4");
        backImg[i + 3].style.transform = "rotate(6deg)";
        backImg[i + 3].style.zIndex = "0";
        backImg[i + 3].style.opacity = "1";
        backImg[i + 2].classList.remove("moveImg3");
        backImg[i + 2].style.transform = "rotate(0deg)";
        backImg[i + 2].style.zIndex = "1";
        backImg[i + 1].classList.remove("moveImg2");
        backImg[i + 1].style.transform = "rotate(-6deg)";
        backImg[i + 1].style.zIndex = "2";
        backImg[i + 1].className += " moveImg1";
        backImg[i + 2].className += " moveImg2";
        backImg[i + 3].className += " moveImg3";
        backImg[i + 4].className += " moveImg4";
      } else {
        if (i + 1 >= 12) {
          iOne = iTwo = iThree = iFour = i - 12;
        } else if (i + 2 >= 12) {
          iOne = i;
          iTwo = iThree = iFour = i - 12;
        } else if (i + 3 >= 12) {
          iOne = iTwo = i;
          iThree = iFour = i - 12;
        } else {
          iOne = iTwo = iThree = i;
          iFour = i - 12;
        }
        backImg[iThree + 3].classList.remove("moveImg4");
        backImg[iThree + 3].style.transform = "rotate(6deg)";
        backImg[iThree + 3].style.zIndex = "0";
        backImg[iThree + 3].style.opacity = "1";
        backImg[iTwo + 2].classList.remove("moveImg3");
        backImg[iTwo + 2].style.transform = "rotate(0deg)";
        backImg[iTwo + 2].style.zIndex = "1";
        backImg[iOne + 1].classList.remove("moveImg2");
        backImg[iOne + 1].style.transform = "rotate(-6deg)";
        backImg[iOne + 1].style.zIndex = "2";
        backImg[iOne + 1].className += " moveImg1";
        backImg[iTwo + 2].className += " moveImg2";
        backImg[iThree + 3].className += " moveImg3";
        backImg[iFour + 4].classList.replace("hidden", "moveImg4");
        backImg[iFour + 4].style.zIndex = "0";
      }
    }, count);
  }
}

animatePrinc();

setInterval(() => {
  for (let m = 0; m < backImg.length; m++) {
    if (m > 2) {
      backImg[m].style.zIndex = "0";
      backImg[m].style.opacity = "0";
    }
    if (backImg[m].classList.contains("hidden")) {
      backImg[m].classList.remove("hidden");
    }
    if (backImg[m].classList.contains("moveImg1")) {
      backImg[m].classList.remove("moveImg1");
    }
    if (backImg[m].classList.contains("moveImg2")) {
      backImg[m].classList.remove("moveImg2");
    }
    if (backImg[m].classList.contains("moveImg3")) {
      backImg[m].classList.remove("moveImg3");
    }
    if (backImg[m].classList.contains("moveImg4")) {
      backImg[m].classList.remove("moveImg4");
    }
  }
  animatePrinc();
}, 16600);

btnRight.addEventListener(
  "click",
  () => {
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
