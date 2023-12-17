const thumbnails = document.querySelectorAll(".thumbnails img");
let displayedImg = document.querySelector(".displayed");
let announcer = document.getElementById("announcer");

let middleImage = null;
let thumbIndex = [];

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

let imageDescriptions = [
  "Well lit underground pass to exits 6 and 7 with walls covered in random pattern, white and blue mosaic",
  "Bank station of London Underground with people silhouettes down the platform and large ad posters on right wall  ",
  "Bank station's platform with train standing on the right, people walking down the platform, four benches by the left wall and bank station's emblem on it",
  "Person with a backpack, all in blacks, head turned to the left, so the face is not visible. In front blurry train- obviously in motion",
  "Very long, beige, tubular passage with a spine of lights running along the whole ceiling. End barely visible. Person walking away, half way through, on the right side",
  "Multiple sets of stairs and escalators. Gray concrete walls and ceiling On the higher level metal and glass dome with sun shining through. People using escalator on the right",
  "London by night. On the left entrance to the underground. Next to it- street with blurry double-decker bus surrounded by buildings. Flares visible from street lanterns",
  "Man turned away, checking his phone. In front of him train's car with closed door. Man's reflection visible in door's window",
  "Blurry train, moving fast on Euston station. Above it- sign with platform's details ",
  "Close up photo of illuminated London Underground logo. Building in the back",
  "Tube station, with train approaching the station. One person down the platform",
  "Empty platform with fast-moving train. Well lit",
];

thumbnails.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    let setMiddleIndex = thumbIndex[index];
    setmiddle(setMiddleIndex);
  });
});

function setmiddle(index) {
  let minus2Index = (index - 2 + srcArray.length) % srcArray.length;
  let minusIndex = (index - 1 + srcArray.length) % srcArray.length;
  let plusIndex = (index + 1) % srcArray.length;
  let plus2Index = (index + 2) % srcArray.length;

  // let imgSrc25 = imgSrc.replace("Image", "25Image");
  // let imgSrc50 = imgSrc.replace("Image", "50Image");
  // let imgSrc75 = imgSrc.replace("Image", "75Image");
  // displayedImg.alt = `${imageDescriptions[index]}`;
  // console.log("Setting srcset...");
  // displayedImg.srcset = `${imgSrc25} 1032w, ${imgSrc50} 746w, ${imgSrc75} 600w`;
  // // console.log(imgSrc);
  // // console.log(displayedImg.srcset);
  // console.log("Loaded image:", displayedImg.currentSrc);

  thumbnails[0].src = srcArray[minus2Index];
  thumbIndex[0] = minus2Index;

  thumbnails[1].src = srcArray[minusIndex];
  thumbIndex[1] = minusIndex;

  thumbnails[2].src = srcArray[index];
  announcer.textContent = `Currently displaying image of ${imageDescriptions[index]}`;
  thumbIndex[2] = index;

  thumbnails[3].src = srcArray[plusIndex];
  thumbIndex[3] = plusIndex;

  thumbnails[4].src = srcArray[plus2Index];
  thumbIndex[4] = plus2Index;

  thumbSrc = thumbnails[2].src;
  imgSrc = thumbSrc.replace("Thumb", "");
  displayedImg.src = imgSrc;

  middleImage = index;
}

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("previous");

btnNext.addEventListener("click", function () {
  setmiddle((middleImage + 1) % srcArray.length);
});

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowRight") {
    btnNext.click();
  }
});

btnPrev.addEventListener("click", function () {
  setmiddle((middleImage - 1 + srcArray.length) % srcArray.length);
});

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowLeft") {
    btnPrev.click();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // Check if a thumbnail is currently focused
    if (document.activeElement && document.activeElement.tagName === "IMG") {
      // Trigger a click event on the focused thumbnail
      document.activeElement.click();
    }
  }
});

setmiddle(0);
