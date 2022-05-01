console.log('Olá, mundo!');

const createBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const card = document.getElementById('carta-gerada');

// create card
function createCard() {
  card.innerText = '';
  const words = input.value.split(' ');
  if (input.value.trim().length === 0) {
    card.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    words.forEach((element) => {
      const wordSpan = document.createElement('span');
      card.appendChild(wordSpan);
      wordSpan.innerText = element;
    });
  }
}
createBtn.addEventListener('click', createCard);
