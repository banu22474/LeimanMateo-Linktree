let pantalla = document.getElementById("pantalla");
let operacion = "";

function agregar(valor) {
  if (pantalla.innerText === "0") pantalla.innerText = "";
  operacion += valor;
  pantalla.innerText = operacion;
}

function calcular() {
  try {
    let resultado = eval(operacion);
    pantalla.innerText = resultado;
    operacion = resultado.toString();
  } catch {
    pantalla.innerText = "Error";
    operacion = "";
  }
}

function limpiar() {
  pantalla.innerText = "0";
  operacion = "";
}
