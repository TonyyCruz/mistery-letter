const botaoCriar = document.querySelector('#criar-carta');
const entradaTexto = document.querySelector('#carta-texto');
const cartaSaida = document.querySelector('#carta-gerada');

// Cria um span para cada palavra <===
function adicionaSpan(frase) {
  for (let key of frase) {
    let card = document.createElement('span');
    card.innerText = key;
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
    frase[i].backgroundColor = `#${corAleatoria()}`;
  }
}

// Botão que gera as cartas <===
botaoCriar.addEventListener('click', function() {
  const frase = entradaTexto.value.split(' ');
  console.log(frase);
  adicionaSpan(frase);
  corDaCarta();
});
