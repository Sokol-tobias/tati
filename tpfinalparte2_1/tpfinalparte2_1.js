let imagenes = {};
let sonido;
let pantallaActual = "inicio";
function preload() {
  imagenes["inicio"] = loadImage("data/img1.jpg");
  imagenes["juego"] = loadImage("data/img2.jpg");
  imagenes["creditos"] = loadImage("data/img4.jpg");
  imagenes["instrucciones"] = loadImage("data/img3.jpg");
  imagenes["nave"] = loadImage("data/auto.png");
  imagenes["obstaculo"] = loadImage("data/obstaculo.png");
  imagenes["fragmento"] = loadImage("data/fragmento.png");
  sonido = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantalla = new Pantalla();
  juego = new Juego();
}

function draw() {

  if (pantalla.botonComenzar.esPresionado()) {
    pantallaActual = "juego";
    console.log("Comenzar presionado");
  } else if (pantalla.botonCreditos.esPresionado()) {
    pantallaActual = "creditos";
    console.log("Creditos presionado");
  } else if (pantalla.botonInstrucciones.esPresionado()) {
    pantallaActual = "instrucciones";
    console.log("Instrucciones presionado");
  } else if (pantalla.botonVolver.esPresionado()) {
    pantallaActual = "inicio";
    console.log("Volver presionado");
  }
  if (pantallaActual === "inicio") {
    pantalla.mostrarInicio();
  } if (pantallaActual === "juego") {
    juego.actualizarJuego();
  } if (pantallaActual === "creditos") {
    pantalla.mostrarCreditos();
  } if (pantallaActual === "instrucciones") {
    pantalla.mostrarInstrucciones();
  } if (pantallaActual === "resultado") {
    pantalla.mostrarResultado(true);
  }
}
