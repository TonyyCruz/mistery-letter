const botaoCriar = document.querySelector('#criar-carta');
const entradaTexto = document.querySelector('#carta-texto');
const cartaSaida = document.querySelector('#carta-gerada');

function checarTesto(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === ' ' || frase[i] === '') {
      cartaSaida.innerText = 'Por favor, digite o conteúdo da carta.';
      break;
    }
  }
}

function limparCartas() {
  const frase = cartaSaida.children.length;
  for (let i = 0; i < frase; i += 1) {
    cartaSaida.removeChild(cartaSaida.children[0]);
  }
}

// Cria um span para cada palavra <===
function adicionaSpan(frase) {
  for (let i = 0; i < frase.length; i += 1) {
    let card = document.createElement('span');
    card.innerText = frase[i];
    card.id = i;
    cartaSaida.appendChild(card);
  }
}

// Gera uma cor aleatoria <===
function corAleatoria() {
  const cor = Math.floor(Math.random() * 899) + 100;
  return cor;
}

// Atribui uma cor aleatoria para cada span <===
function corDaCarta() {
  const frase = cartaSaida.children;
  for (let i = 0; i < frase.length; i += 1) {
    document.getElementById(i).style.backgroundColor = `#${corAleatoria()}`;
    document.getElementById(i).style.margin = '10px';
    document.getElementById(i).style.borderRadius = '10px';
  }
}

// Botão que gera as cartas <===
botaoCriar.addEventListener('click', function() {
  const frase = entradaTexto.value.split(' ');
  checarTesto(frase);
  limparCartas();
  adicionaSpan(frase);
  corDaCarta();
});
