const inputBox = document.getElementById("div-top-of-inuput-box");
const hideBtn = document.getElementById("x-icon-on-input");
const inputbox = document.getElementById("input-box");

inputBox.addEventListener("click", function () {
     inputBox.style.visibility = "hidden";
     inputbox.focus();
});

hideBtn.addEventListener("click", function () {
     inputBox.style.visibility = "visible";
});
const vOne = document.getElementById("videoOne");
const vTwo = document.getElementById("videoTwo");
const vThree = document.getElementById("video-3");
const vFour = document.getElementById("videoFour");

let onOff = 0;
let onOff_two = 0;
let three = 0;
let four = 0 ;

vOne.addEventListener("click", function () {
     onOff_two = 0;
     three = 0;
     vTwo.pause();
     vThree.pause();
     four = 0 ;
     vFour.pause();
     if (onOff == 0) {
          vOne.play();
          onOff = 1;
     } else {
          onOff = 0;
          vOne.pause();
     }
     console.log("fisry");
});

vTwo.addEventListener("click", function () {
     onOff = 0;
     vOne.pause();
     vThree.pause();
     three = 0;
     four = 0;
     vFour.pause();
     if (onOff_two == 0) {
          vTwo.play();
          onOff_two = 1;
     } else {
          onOff_two = 0;
          vTwo.pause();
     }
     console.log("second");
});

vThree.addEventListener("click", function () {
     onOff = 0;
     onOff_two = 0;
     four = 0 ;
     vOne.pause();
     vTwo.pause();
     vFour.pause();
     if (three == 0) {
          vThree.play();
          three = 1;
     } else {
          three = 0;
          vThree.pause();
     }
     console.log("fourth");
});

vFour.addEventListener("click", function () {
     onOff = 0;
     onOff_two = 0;
     three = 0 ;
     vOne.pause();
     vTwo.pause();
     vThree.pause();
     if (four == 0) {
          vFour.play();
          four = 1;
     } else {
          four = 0;
          vFour.pause();
     }
     console.log("fourth");
});


