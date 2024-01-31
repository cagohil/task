// task 1 start here
function alertText() {
  alert("hello world");
}

function changeColor() {
  var defaultColor = document.getElementById("textChange").style.color;
  var defaultBgColor =
    document.getElementById("textChange").style.backgroundColor;

  if (defaultColor == "black") {
    document.getElementById("textChange").style.color = "blue";
  } else if (defaultBgColor == "blue") {
    document.getElementById("textChange").style.color = "white";
  } else {
    document.getElementById("textChange").style.color = "black";
  }
}

function bgColorChange() {
  var defaultBgColor =
    document.getElementById("textChange").style.backgroundColor;

  if (defaultBgColor == "white") {
    document.getElementById("textChange").style.backgroundColor = "blue";
  } else {
    document.getElementById("textChange").style.backgroundColor = "white";
  }
}

function underline() {
  var underlineText =
    document.getElementById("textChange").style.textDecoration;

  if (underlineText == "none") {
    document.getElementById("textChange").style.textDecoration = "underline";
    document.getElementById("underlineBtn").innerHTML = "none";
  } else {
    document.getElementById("textChange").style.textDecoration = "none";
    document.getElementById("underlineBtn").innerHTML = "underline";
  }
}

function makeUpperAndLower() {
  var makeUpperAndLowercase =
    document.getElementById("textChange").style.textTransform;

  if (makeUpperAndLowercase == "lowercase") {
    document.getElementById("textChange").style.textTransform = "uppercase";
    document.getElementById("buttonLowerAndUppercase").innerHTML = "lowercase";
  } else {
    document.getElementById("textChange").style.textTransform = "lowercase";
    document.getElementById("buttonLowerAndUppercase").innerHTML = "uppercase";
  }
}
// task 1 end here

// task 2 start here
function leftSpinner() {
  document.querySelector(".spinner-displayer").classList.remove("spokeRight");
  document.querySelector(".spinner-displayer").classList.add("spokeLeft");
}

function rightSpinner() {
  document.querySelector(".spinner-displayer").classList.remove("spokeLeft");
  document.querySelector(".spinner-displayer").classList.add("spokeRight");
}

function stopSpinner() {
  document
    .querySelector(".spinner-displayer")
    .classList.remove("spokeLeft", "spokeRight");
}
// task 2 end here

// task 3 start here
function valueSpinner() {
  const myInput = document.querySelector("#my-input");
  const wheelBox = document.querySelector("#spoke");

  const repeatCount = 0;

  // random color generator function
  function get_random_color() {
    function c() {
      var hex = Math.floor(Math.random() * 256).toString(16);
      return ("0" + String(hex)).substr(-2); // pad with zero
    }
    return "#" + c() + c() + c();
  }


  for (let i = 0; i <= repeatCount; i++) {
    wheelBox.style.animation = "none";
    void wheelBox.offsetWidth;
    wheelBox.style.animation = `spin var(--dur) linear ${myInput.value}`;
    document.styleSheets[0].insertRule(
      `\
    @keyframes spin {\
      from {\
         transform: rotateZ(0deg);\
         background-color: ${get_random_color()};\
        }\
      to {\
       transform: rotateZ(360deg);\
       background-color: ${get_random_color()}\
       }\
    }`
    );
  }
}
