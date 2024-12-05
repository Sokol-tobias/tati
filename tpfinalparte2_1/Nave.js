class Nave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 80;
    this.velocidad = 5;
    this.visible = true;
  }

  moverDerecha() {
    this.x += 5;
  }

  moverIzquierda() {
    this.x -= 5;
  }

  moverAbajo() {
    this.y += 5;
  }

  moverArriba() {
    this.y -= 5;
  }

  teclaPresionada() {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    }
    if (keyCode === 32) {
      this.disparar();
    }
  }

  disparar() {
    juego.balas.push(new Bala(this.x + this.ancho / 2, this.y));
  }

  mostrar() {
    if (this.visible) {
      image(imagenes["nave"], this.x, this.y, this.ancho, this.alto)
    }
  }
  ocultar(){
      this.visible = false;
  }
}
