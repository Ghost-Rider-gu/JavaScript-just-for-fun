const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let matrixGradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
matrixGradient.addColorStop(0, 'red');
matrixGradient.addColorStop(0.2, 'yellow');
matrixGradient.addColorStop(0.5, 'green');
matrixGradient.addColorStop(0.7, 'magenta');
matrixGradient.addColorStop(1, 'blue');

class MatrixSymbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.symbol = '';
    this.canvasHeight = canvasHeight;
  }

  draw(context) {
    this.symbol = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.fillStyle = matrixGradient;
    context.fillText(this.symbol, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.95) {
      this.y = 0;
    } else {
      this.y++;
    }
  }
}

class MatrixEffect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];

    this.#initialize();
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new MatrixSymbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
}

const matrixEffect = new MatrixEffect(canvas.width, canvas.height);

let lastTime = 0;
const fps = 60;
const nextFrame = 1000 / fps;
let timer = 0;

function animateMatrix(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  console.log(deltaTime);
  if (timer < nextFrame) {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.textAlign = 'center';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = matrixEffect.fontSize + 'px monospace';
    matrixEffect.symbols.forEach(symbol => symbol.draw(context));
    requestAnimationFrame(animateMatrix);
    timer = 0;
  } else {
    timer += deltaTime;
  }
}

animateMatrix(0);
