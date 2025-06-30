let pantalla = document.getElementById("pantalla");
let resultado = document.getElementById("resultado");
let operacion = "";

function agregar(valor) {
  if (pantalla.innerText === "0") pantalla.innerText = "";
  operacion += valor;
  pantalla.innerText = operacion;
}

function limpiar() {
  operacion = "";
  pantalla.innerText = "0";
  resultado.innerText = "";
}

function borrar() {
  operacion = operacion.slice(0, -1);
  pantalla.innerText = operacion || "0";
}

function convertir() {
  const tipo = document.getElementById("conversion").value;
  const numero = parseFloat(operacion);
  if (isNaN(numero)) {
    resultado.innerText = "Por favor, ingresá un número válido.";
    return;
  }

  if (tipo === "cf") {
    const f = (numero * 9/5) + 32;
    resultado.innerText = `${numero}°C = ${f.toFixed(2)}°F`;
  } else {
    const c = (numero - 32) * 5/9;
    resultado.innerText = `${numero}°F = ${c.toFixed(2)}°C`;
  }
}
