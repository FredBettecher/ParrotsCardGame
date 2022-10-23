// definindo variaveis
const cards = document.querySelectorAll('.memory-card');
let cardFlipped = false; // condição que verifica se a carta foi virada
let cardOne, cardTwo;
let lockGame = false; // condição que bloqueia a interação com o jogo (usada para evitar bugs)
let cardsArray = [];

// função que controla as cartas 
function flipCard(card){
    if(lockGame) return;

    if(card === cardOne) return;

    card.classList.add('flip');

    cardTwo = card;

    // checando se uma carta foi virada
    if(cardFlipped === false){
        cardFlipped = true;
        cardOne = card;
        return;
    } else{
        cardFlipped = false;
        cardTwo = card;
    }

    // configurando para que se as cartas derem match elas não interagem mais 
    if(cardOne.dataset.match === cardTwo.dataset.match){
        cardOne.removeAttribute('onclick');
        cardTwo.removeAttribute('onclick');
        cardFlipped = false;
        lockGame = false;
        cardOne = null;
        cardTwo = null;
    } else{
        lockGame = true;
        setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        lockGame = false;
        cardFlipped = false;
        lockGame = false;
        cardOne = null;
        cardTwo = null;
        }, 1000);
    }
}

// funcao que embaralha as cartas
function mixCards(){
    cards.forEach(card => {
        let position = Math.floor(Math.random() * 14);
        card.style.order = position;        
    });
}

mixCards();