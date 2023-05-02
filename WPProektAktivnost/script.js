// Funkcija za presmetka na hipotenuza
function calculate() {
  // zemanje na vrednostite od html dokumentot
  var sideA = parseFloat(document.getElementById("side-a").value);
  var sideB = parseFloat(document.getElementById("side-b").value);
  //formula
  var hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
  // davanje na ID result za rezultatot i zaokruzuvanje na 2 decimali
  document.getElementById("result").value = hypotenuse.toFixed(2);
}
// Da mozi da se koristi funkcijata vo drugi moduli 
module.exports = calculate;

// Funkcija za menuvanje na pozadinata preku dugme
function changeColor1() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
// Da mozi da se koristi funkcijata vo drugi moduli
module.exports = changeColor1;

// Funkcija za menuvanje na pozadinata preku dugme
function changeColor2() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
// Da mozi da se koristi funkcijata vo drugi moduli
module.exports = changeColor2;