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


