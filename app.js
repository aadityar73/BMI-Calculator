let card2 = document.getElementById("card2");
card2.style.display = "none";

function calculate() {
  let weight = document.getElementById("weight");
  let h = document.getElementById("height");
  let result = document.getElementById("result");

  let weightValue = weight.value;
  let hValue = h.value;

  let h1 = hValue / 100;
  let heightValue = h1 * h1;
  let bmi = weightValue / heightValue;

  result.innerText = bmi;
  weight.value = "";
  h.value = "";
  card2.style.display = "inline-block";
}
