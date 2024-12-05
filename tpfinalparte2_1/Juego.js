class Juego {
  constructor() {
    this.nave = new Nave(width / 2, height - 40);
    this.balas = [];
    this.fragmentos = [];
    this.obstáculos = [];
    this.juegoTerminado = false;
    this.gano = false;
    this.iniciar();
  }

  iniciar() {
    this.obstáculos = [];
    for (let i = 0; i < 5; i++) {
      this.obstáculos.push(new Obstaculo(i * 100 + random(20,100), random(40,300)));
    }
  }

  actualizarJuego() {
        image(imagenes["juego"], 0, 0, width, height);
        pantalla.ocultarBotonesPrincipales();
    this.nave.mostrar();
    if (keyIsPressed) {
      this.nave.teclaPresionada();
    }
    this.balas.forEach((bala, i) => {
      bala.mover();
      bala.mostrar();

      if (bala.fueraDePantalla()) {
        this.balas.splice(i, 1);
        return;
      }

      this.fragmentos.forEach((fragmento, j) => {
        if (
          bala.x > fragmento.x - 15 &&
          bala.x < fragmento.x + 15 &&
          bala.y > fragmento.y - 15 &&
          bala.y < fragmento.y + 15
          ) {
          this.fragmentos.splice(j, 1);
          this.balas.splice(i, 1);
          return;
        }
      }
      );
    }
    );

    this.obstáculos.forEach((obstaculo, i) => {
      obstaculo.mostrar();
      if (obstaculo.ahColisionadoConBala(this.balas)) {
        this.obstáculos.splice(i, 1);
      }
    }
    );

    this.fragmentos.forEach((fragmento, i) => {
      fragmento.mover();
      fragmento.mostrar();

      if (
        fragmento.x > this.nave.x &&
        fragmento.x < this.nave.x + this.nave.ancho &&
        fragmento.y > this.nave.y &&
        fragmento.y < this.nave.y + this.nave.alto
        ) {
        this.juegoTerminado = true;
        this.gano = false;
        this.nave.ocultar();
      }
    }
    );

    if (this.obstáculos.length === 0 && this.fragmentos.length === 0) {
      this.juegoTerminado = true;
      this.gano = true;
      this.nave.ocultar();
    }

    if (this.juegoTerminado) {
      pantalla.mostrarResultado(this.gano);
    }
  }
}
