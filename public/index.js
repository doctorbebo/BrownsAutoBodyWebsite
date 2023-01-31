const carousel = document.querySelector("#carousel");
const emailButton = document.querySelector("#email-button");
const callButton = document.querySelector("#call-button");

const directionsButton = document.querySelector("#direction-button");

directionsButton.addEventListener("click", () => {
  if (navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPod") != -1)
    window.open("http://maps.apple.com/?daddr=Browns+AutoBody+LLC+10800+Glover+ln+Mill+Creek+PA+17060");
  else window.open("https://www.google.com/maps/search/?api=1&query=Browns+AutoBody+LLC+10800+Glover+ln+Mill+Creek+PA+17060");
});

callButton.addEventListener('click', () => {
    document.location.href = "tel:+18146435423";
})

emailButton.addEventListener("click", () => {
  window.location.href = "mailto:bbrownsautobody@gmail.com";
});