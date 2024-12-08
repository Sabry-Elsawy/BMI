var weightInput = document.getElementById("weight");
var heightInput = document.getElementById("height");
var btn = document.querySelector("button");
var result = document.getElementById("result");
var Inputs = document.getElementsByTagName("input");

function calculateBMI() {
  var weight = weightInput.value;
  var height = heightInput.value;

  var heightM = height / 100;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    result.innerHTML =
      "Please enter valid positive numbers for weight and height";
    return;
  }

  var res = weight / (heightM * heightM);
  var status = "";
  if (res < 18.5) {
    status = "Under weight";
  } else if (res >= 18.5 && res <= 24.9) {
    status = "Healthy weight";
  } else if (res >= 25.0 && res <= 29.9) {
    status = "over weight";
  } else {
    status = "Obesity";
  }

  result.innerHTML = `Your BMI results ${res.toFixed(2)} will appear here ${status}`;

  clearInput();
}

function clearInput() {
  for (var i = 0; i < Inputs.length; i++) {
    Inputs[i].value = "";
  }
}
