const thumbnails = document.querySelectorAll(".thumbnails img");
let displayedImg = document.querySelector(".displayed");
const welcomeScreen = document.getElementById("welcome-screen");

// scriptObject.src = URL

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    thumbSrc = thumb.src;
    imgSrc = thumbSrc.replace("Thumb", "");
    displayedImg.src = imgSrc;
  });
});
