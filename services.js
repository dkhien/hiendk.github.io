var submitBtn = document.getElementById("submit");

var heightBar = document.getElementById("height");
var weightBar = document.getElementById("weight");

var underweightBtn = document.getElementById("underweight_Btn");
var normalBtn = document.getElementById("normal_Btn");
var overweightBtn = document.getElementById("overweight_Btn");
var obeseBtn = document.getElementById("obese_Btn");

var measureResult;

var seeMenuBtn = document.getElementById("btn_seeMenu");

var submitForm = document.getElementById("submit-form");
submitForm.addEventListener("submit", function(e) {
  e.preventDefault();
});



heightBar.addEventListener("click", function() {
  if (heightBar.value == "Height (CM)") {
    // heightBar.style.textAlign = "center";
    heightBar.value = "";
    
    // heightBar.style.color = "white";
    
    
  }
});


weightBar.addEventListener("click", function() {
  if (weightBar.value == "Weight (KG)") {
    weightBar.value = "";
    // weightBar.style.color = "white";
  }
});

seeMenuBtn  .addEventListener("click", function() {
  var heightInput = document.getElementById("height").value;

  var weightInput = document.getElementById("weight").value;

  var genderInput = document.getElementsByName("gender");

  for (var i = 0; i < genderInput.length; i++) {
    if (genderInput[i].checked === true) {
      var checkedGender = genderInput[i].value;
    }
  }
  var bmi = Math.round((weightInput / (heightInput / 100) ** 2) * 100) / 100;

  if (checkedGender === "Male") {
    if (bmi < 18.5) {
      measureResult = "Underweight";
      document.getElementById("measure").style.color = "orangered";
    } else if (bmi > 18.5 && bmi < 24.9) {
      measureResult = "Normal";
      document.getElementById("measure").style.color = "green";
    } else if (bmi > 25 && bmi < 29.9) {
      measureResult = "Overweight";
      document.getElementById("measure").style.color = "#f0df22";
    } else if (bmi > 30) {
      measureResult = "Obese";
      document.getElementById("measure").style.color = "red";
    }

    document.getElementById("bmi_result").innerHTML = "BMI = " + bmi;
    document.getElementById("measure").innerHTML = measureResult;
    if (
      document.getElementById("bmi_result").innerHTML == NaN ||
      measureResult == undefined
    ) {
      document.getElementById("bmi_result").innerHTML =
        "Check your input again";
      document.getElementById("measure").innerHTML = "";
    }
  } else if (checkedGender === "Female") {
    if (bmi < 16.5) {
      measureResult = "Underweight";
      document.getElementById("measure").style.color = "orangered";
    } else if (bmi > 16.5 && bmi < 22.9) {
      measureResult = "Normal";
      document.getElementById("measure").style.color = "green";
    } else if (bmi > 23 && bmi < 27.9) {
      measureResult = "Overweight";
      document.getElementById("measure").style.color = "#f0df22";
    } else if (bmi > 28) {
      measureResult = "Obese";
      document.getElementById("measure").style.color = "red";
    }

    document.getElementById("bmi_result").innerHTML = "BMI = " + bmi;
    document.getElementById("measure").innerHTML = measureResult;
    if (
      document.getElementById("bmi_result").innerHTML == NaN ||
      measureResult == undefined
    ) {
      document.getElementById("bmi_result").innerHTML =
        "Check your input again";
      document.getElementById("measure").innerHTML = "";
    }
  }
});


seeMenuBtn.addEventListener("click", function() {
  if (measureResult == "Underweight") {
    window.open("https://hiendk.github.io/underweight.html", "_blank");
  } else if (measureResult == "Normal") {
    window.open("https://hiendk.github.io/normal.html", "_blank");
  } else if (measureResult == "Overweight") {
    window.open("https://hiendk.github.io/overweight.html", "_blank");
  } else if (measureResult == "Obese") {
    window.open("https://hiendk.github.io/obese.html", "_blank");
  }
});


