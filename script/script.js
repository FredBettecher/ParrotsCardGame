// definindo variaveis
const cards = document.querySelectorAll('.memory-card');
let cardFlipped = false; // condição que verifica se a carta foi virada
let cardOne, cardTwo; // variáveis que vão ser usadas para comparar as cartas
let lockGame = false; // condição que bloqueia a interação com o jogo (usada para evitar bugs)
let count = 0; // contador de jogadas
let qtdOfCards = 0; // quantidade de cartas
let turnedPairs = 0; // contador de pares virados

// função que controla as cartas 
function flipCard(card){    
    if(lockGame) return; // impede interações com a tela enquanto a animação da carta ainda não terminou

    if(card === cardOne) return; // impede interações com a tela se clicar na mesma carta

    card.classList.add('flip'); // tudo normal por aqui :)

    cardTwo = card;

    count++; // adiciona uma jogada
    console.log("Nº de jogadas: " + count);
    
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
        turnedPairs++;
        console.log("Pares virados: " + turnedPairs);
        cardFlipped = false;
        lockGame = false;
        cardOne = null;
        cardTwo = null;
        if (turnedPairs === qtdOfCards / 2) {
            alert("Parabêns! Você ganhou o jogo com " + count + " jogadas.");
          }
          
    } else {
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

// função que embaralha as cartas
function mixCards(){
    cards.forEach(card => {
        let position = Math.floor(Math.random() * 14);
        card.style.order = position;        
    });
}

// função que seleciona o número de cartas
function quantityOfCards(){
    while((qtdOfCards < 4 || qtdOfCards > 14) || (qtdOfCards % 2 !== 0)){
        qtdOfCards = prompt("Escolha um número par de cartas entre 4 e 14");
    }

    if((qtdOfCards >= 4 || qtdOfCards <= 14) || (qtdOfCards % 2 === 0)){
        for(let i = 0; i < qtdOfCards; i++){
            document.getElementById(`card${i}`).style.display = 'block';
        }
    }
}


function main(){
    mixCards();
    quantityOfCards();
}

main();