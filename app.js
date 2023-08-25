const cardArray = [
    {
        name: 'apple',
        img: './images/apple.jpg'
    },
    {
        name: 'cherry',
        img: './images/Cherry.png'
    },
    {
        name: 'coconut',
        img: './images/coconut.jpg'
    },
    {
        name: 'grape',
        img: './images/Grape.jpg'
    },
    {
        name: 'orange',
        img: './images/orange.jpg'
    },
    {
        name: 'pineapple',
        img: './images/pineapple.jpg'
    },
    {
        name: 'strawberry',
        img: './images/strawberry.jpg'
    },
    {
        name: 'watermelon',
        img: './images/watermelon.avif'
    },
    {
        name: 'lemon',
        img: './images/lemon.jpg'
    },
    {
        name: 'pear',
        img: './images/pear.avif'
    },
    {
        name: 'apple',
        img: './images/apple.jpg'
    },
    {
        name: 'cherry',
        img: './images/Cherry.png'
    },
    {
        name: 'coconut',
        img: './images/coconut.jpg'
    },
    {
        name: 'grape',
        img: './images/Grape.jpg'
    },
    {
        name: 'orange',
        img: './images/orange.jpg'
    },
    {
        name: 'pineapple',
        img: './images/pineapple.jpg'
    },
    {
        name: 'strawberry',
        img: './images/strawberry.jpg'
    },
    {
        name: 'watermelon',
        img: './images/watermelon.avif'
    },
    {
        name: 'lemon',
        img: './images/lemon.jpg'
    },
    {
        name: 'pear',
        img: './images/pear.avif'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const scoreDisplay = document.querySelector('#score');
const resultDisplay = document.querySelector('#result');
const textarea = document.querySelector('#text');

let cardsChosen = []
let cardsChosenIds = []
let cardWon = []


function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
       const card= document.createElement('img')
       card.src= "./images/blank.jpg"
       card.id=i
       card.addEventListener('click', handleClick)
       gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch () {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId= cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId==optionTwoId) {
        alert('you have clicked the same image!')

    }
   if( cardsChosen[0] == cardsChosen[1] && optionOneId!=optionTwoId) {
    alert ('you found a match')
    cards[optionOneId].setAttribute('src', './images/white.avif')
    cards[optionTwoId].setAttribute('src', './images/white.avif')
    cards[optionOneId].removeEventListener('click', handleClick)
    cards[optionTwoId].removeEventListener('click', handleClick)
    cardWon.push(cardsChosen)
   } else {
    cards[optionOneId].setAttribute('src', './images/blank.jpg')
    cards[optionTwoId].setAttribute('src', './images/blank.jpg')
    alert('try again')
   }
   scoreDisplay.textContent= cardWon.length
   cardsChosen= []
   cardsChosenIds = []

   if(cardWon.length == cardArray.length/2) {
    resultDisplay.textContent= 'Congratulations , you found them all!'
   }
}

function handleClick () {
    const cardId = this.id
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    this.src = cardArray[cardId].img
    if (cardsChosen.length===2 ){
        setTimeout(checkMatch, 500)
    }
}