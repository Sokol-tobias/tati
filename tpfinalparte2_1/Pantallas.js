class Pantalla {
  constructor() {
    this.botonComenzar = new Boton("COMENZAR", width / 2 - 250, height - 50, 150, 40);
    this.botonCreditos = new Boton("CREDITOS", width / 2 - 50, height - 50, 100, 40);
    this.botonInstrucciones = new Boton("INSTRUCCIONES", width / 2 + 80, height - 50, 150, 40);
    this.botonVolver = new Boton("VOLVER", width / 2 - 50, height - 50, 100, 40);
  }


  mostrarCreditos() {
    image(imagenes["creditos"], 0, 0, width, height);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Juego creado por Tobias Ezequiel Sokol.", width / 2, height / 2);
    this.ocultarBotonesPrincipales();
    this.botonVolver.mostrar();
  }

  mostrarInstrucciones() {
    image(imagenes["instrucciones"], 0, 0, width, height);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Usa flechas para moverte y Dispara con la barra espaciadora.", width / 2, height / 2);
    this.ocultarBotonesPrincipales();
    this.botonVolver.mostrar() ;
  }

  mostrarResultado(gano) {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(gano ? "¡Ganaste!" : "¡Perdiste!", width / 2, height / 2);
    this.botonVolver.mostrar();
    this.ocultarBotonesPrincipales();
  }

  mostrarInicio() {
    image(imagenes["inicio"], 0, 0, width, height);
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Destruye a la competencia y sus partes", width / 2, height / 2 - 100);
    this.botonComenzar.mostrar();
    this.botonCreditos.mostrar();
    this.botonInstrucciones.mostrar();
    this.botonVolver.ocultar();
  }
  
  ocultarBotonesPrincipales() {
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonInstrucciones.ocultar();
  }
}
