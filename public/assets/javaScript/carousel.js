const leftButton = document.querySelector("#left-btn");
const rightButton = document.querySelector("#right-btn");
const displayImage = document.querySelector("#diplay-image");
const imageFolderPath = "./assets/images/carouselImages/";
const fileNames = ["car01.jpeg", "car02.jpeg", "car03.jpeg", "car04.jpeg"]

const SwitchImage = (moveToNext = true) => {
  displayImage.setAttribute("src", `${imageFolderPath}${fileNames[index]}`);
  
  if (moveToNext) index = index + 1 >= fileNames.length ? (index = 0) : index + 1;
  else index = index - 1 < 0 ? (index = fileNames.length - 1) : index - 1;
};

let index = 0;
const time = 4000;
let timer = setInterval(SwitchImage, time);
SwitchImage()

rightButton.addEventListener("click", () => SwitchImage());
leftButton.addEventListener("click", () => SwitchImage(false));