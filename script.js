const thumbnails = document.querySelectorAll(".thumbnails img");
let displayedImg = document.querySelector(".displayed");

// scriptObject.src = URL

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    thumbSrc = thumb.src;
    imgSrc = thumbSrc.replace("Thumb", "");
    displayedImg.src = imgSrc;
  });
});
