function tirarDado() {
  var numero = Math.floor(Math.random() * 6) + 1;

  var resultado = document.getElementById("resultado");
  var imagen = document.getElementById("imagen-dado");

  
  imagen.src = "./portfolio_imagenes/" + numero + ".png";
  imagen.style.display = "block";
}
