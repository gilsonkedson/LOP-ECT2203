const windowWidth = 400; // Largura da Tela
const windowHeight = 400; // Altura da Tela
const backgroundColorDefault = "#54814a";
const whiteColor = "#FFFFFFF";

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(backgroundColorDefault);
  menu();
}

function menu() {
  const titleGame = "DEFINIDO & INFINITO";
  const fontSizeTitle = 30;
  const optionsMenu = ["JOGAR", "INSTRUÇÕES", "CRÉDITOS"];
  const rectColor = "#81558a";
  const fontSizeOptions = 22.5;

  // Apresentando título do jogo...
  textSize(fontSizeTitle);
  fill(whiteColor);
  noStroke();
  text(titleGame, windowWidth / 2, 45);

  // Apresentando opções do menu...
  textSize(fontSizeOptions);
  optionsMenu.forEach((option, index) => {
    fill(rectColor);
    rect(windowWidth / 2, windowHeight / 2.6 + index * 50, 180, 40);
    fill(whiteColor);
    text(option, windowWidth / 2, windowHeight / 2.45 + index * 50);
  });
}
