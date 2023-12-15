const thumbnails = document.querySelectorAll(".thumbnails img");
let displayedImg = document.querySelector(".displayed");
let announcer = document.getElementById("announcer");

// scriptObject.src = URL

let srcArray = [
  "./images/ImageThumb1.jpg",
  "./images/ImageThumb2.jpg",
  "./images/ImageThumb3.jpg",
  "./images/ImageThumb4.jpg",
  "./images/ImageThumb5.jpg",
  "./images/ImageThumb6.jpg",
  "./images/ImageThumb7.jpg",
  "./images/ImageThumb8.jpg",
  "./images/ImageThumb9.jpg",
  "./images/ImageThumb10.jpg",
  "./images/ImageThumb11.jpg",
  "./images/ImageThumb12.jpg",
];

thumbnails.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    thumbSrc = thumb.src;
    imgSrc = thumbSrc.replace("Thumb", "");
    displayedImg.src = imgSrc;
  });
});

// let items = [
//   "photo1",
//   "photo2",
//   "photo3",
//   "photo4",
//   "photo5",
//   "photo6",
//   "photo7",
//   "photo8",
//   "photo9",
// ];

let middleImage = null;

function setmiddle(index) {
  let minus2Index = (index - 2 + srcArray.length) % srcArray.length;
  let minusIndex = (index - 1 + srcArray.length) % srcArray.length;
  let plusIndex = (index + 1) % srcArray.length;
  let plus2Index = (index + 2) % srcArray.length;

  thumbnails[0].src = srcArray[minus2Index];
  thumbnails[1].src = srcArray[minusIndex];

  thumbnails[2].src = srcArray[index];
  // console.log(`Middle image is ${srcArray[index]}`);
  announcer.textContent = `Currently displaying image of ${srcArray[index]}`;

  thumbnails[3].src = srcArray[plusIndex];
  thumbnails[4].src = srcArray[plus2Index];

  thumbSrc = thumbnails[2].src;
  imgSrc = thumbSrc.replace("Thumb", "");
  displayedImg.src = imgSrc;

  middleImage = index;

  // console.log(items[minus2Index]);
  // console.log(items[minusIndex]);
  // console.log(items[index] + "<--SELECTED ");
  // console.log(items[plusIndex]);
  // console.log(items[plus2Index]);
}

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("previous");

btnNext.addEventListener("click", function () {
  setmiddle((middleImage + 1) % srcArray.length);
});

btnPrev.addEventListener("click", function () {
  setmiddle((middleImage - 1 + srcArray.length) % srcArray.length);
});

setmiddle(0);
