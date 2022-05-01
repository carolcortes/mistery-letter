console.log('Olá, mundo!');

const createBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const card = document.getElementById('carta-gerada');

// add Classes
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function addClasses(word) {
  word.classList.add(style[Math.floor(Math.random() * 3)]);
  word.classList.add(size[Math.floor(Math.random() * 3)]);
  word.classList.add(rotation[Math.floor(Math.random() * 2)]);
  word.classList.add(inclination[Math.floor(Math.random() * 2)]);
}

function changeClasses(event) {
  const myEvent = event;
  myEvent.target.className = '';
  addClasses(myEvent.target);
}

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
      addClasses(wordSpan);
      wordSpan.addEventListener('click', changeClasses);
    });
  }
}
createBtn.addEventListener('click', createCard);

// counter
const count = document.createElement('p');
count.id = 'carta-contador';
document.getElementsByTagName('main')[0].appendChild(count);
function counter() {
  count.innerText = '';
  count.innerText = document.getElementsByTagName('span').length;
}
createBtn.addEventListener('click', counter);
