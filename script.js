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


function leftSpinner() {
    document.querySelector(".spinner-displayer").classList.remove("spokeRight");
    document.querySelector(".spinner-displayer").classList.add("spokeLeft");
  }

function rightSpinner() {
  document.querySelector(".spinner-displayer").classList.remove("spokeLeft");
  document.querySelector(".spinner-displayer").classList.add("spokeRight");
}

function stopSpinner() {
    document.querySelector(".spinner-displayer").classList.remove("spokeLeft", "spokeRight");
}

function valueSpinner(){
  const myInput = document.querySelector('#my-input');
  console.log(myInput.value);
  myInput.reset();
}
