const galleryButton = document.querySelector("#gallery-button");
const carousel = document.querySelector("#carousel");
const emailButton = document.querySelector("#email-button");
const callButton = document.querySelector("#call-button");

const directionsButton = document.querySelector("#direction-button");

galleryButton.addEventListener("click", (event) => {
  carousel.scrollIntoView({ behavior: "smooth" });
});

directionsButton.addEventListener("click", () => {
  if (navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPod") != -1)
    window.open("http://maps.apple.com/?daddr=Browns+AutoBody+LLC+1824+Allegheny+St+Huntingdon+PA+16652");
  else window.open("https://www.google.com/maps/search/?api=1&query=Browns+AutoBody+LLC+1824+Allegheny+St+Huntingdon+PA+16652");
});

callButton.addEventListener('click', () => {
    document.location.href = "tel:+123-456-7890";
})

emailButton.addEventListener("click", () => {
  window.location.href = "mailto:bbrownsautobody@gmail.com";
});