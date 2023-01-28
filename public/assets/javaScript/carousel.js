const leftButton = document.querySelector("#left-btn");
const rightButton = document.querySelector("#right-btn");
const displayImage = document.querySelector("#diplay-image");

const imageFolderPath = "./assets/images/carouselImages/";
const fileNames = [];
fileNames[0] = "car01.jpeg";
fileNames[1] = "car02.jpeg";
fileNames[2] = "car03.jpeg";
fileNames[3] = "car04.jpeg";

let index = 0;
const time = 4000;
let timer = setInterval("SwitchImage()", time);

const SwitchImage = (moveToNext = true) => {
  displayImage.setAttribute("src", `${imageFolderPath}${fileNames[index]}`);

  if (moveToNext) index = index + 1 >= fileNames.length ? (index = 0) : index + 1;
  else index = index - 1 < 0 ? (index = fileNames.length - 1) : index - 1;

  clearInterval(timer);
  timer = setInterval("SwitchImage()", time);
};

SwitchImage();

rightButton.addEventListener("click", (event) => SwitchImage());

leftButton.addEventListener("click", (event) => SwitchImage(false));
