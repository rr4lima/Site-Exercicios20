// ex03.js
const formulario = document.getElementById("imc");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Insira valores válidos.");
    return;
  }

  const imc = peso / (altura * altura); 


  resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

 
  if (imc < 18.5) {
    resultado.textContent += " - Você está abaixo do peso.";
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado.textContent += " - Você está com o peso normal.";
  } else if (imc >= 25 && imc < 29.9) {
    resultado.textContent += " - Você está sobrepeso.";
  } else {
    resultado.textContent += " - Você está com obesidade.";
  }
});
