document.addEventListener('DOMContentLoaded', () => {
   
        //the card options
        const cardArray = [
            {
                name: 'naruto',
                img: 'images/naruto.jpg'
            },
            {
                name: 'kid naruto',
                img: 'images/kidnaruto.webp'
            },
            {
                name: 'sage naruto',
                img: 'images/sagenaruto.webp'
            },
            {
                name: 'sasuke',
                img: 'images/sasuke.png'
            },
            {
                name: 'sasuke1',
                img: 'images/sasuke1.jpeg'
            },
            {
                name: 'kid sasuke',
                img: 'images/kidsasuke.jpg'
            },
            {
                name: 'naruto',
                img: 'images/naruto.jpg'
            },
            {
                name: 'kid naruto',
                img: 'images/kidnaruto.webp'
            },
            {
                name: 'sage naruto',
                img: 'images/sagenaruto.webp'
            },
            {
                name: 'sasuke',
                img: 'images/sasuke.png'
            },
            {
                name: 'sasuke1',
                img: 'images/sasuke1.jpeg'
            },
            {
                name: 'kid sasuke',
                img: 'images/kidsasuke.jpg'
            }
        ]
    //randomization
    cardArray.sort(() => 0.5 - Math.random())

    //selectors
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsPicked = []
    let cardsPickedId = []
    let cardsWon = []
    
    //gameboard with flipCard function
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/frontcard.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    //check matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsPickedId[0]
        const optionTwoId = cardsPickedId[1]
        //make a match
        if (cardsPicked[0] === cardsPicked[1]) {
            window.alert('Nice job! Keep going and you will be the next Hokage!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsPicked)
        //no match made
        } else {
            cards[optionOneId].setAttribute('src', 'images/frontcard.png')
            cards[optionTwoId].setAttribute('src', 'images/frontcard.png')
            //window.alert('No match! Follow your ninja way!')
        }
        //all matches made
        cardsPicked = []
        cardsPickedId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Well done, young shinobi!'
        }
    } 
   
    //flipping cards
    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardsPicked.push(cardArray[cardId].name)
        cardsPickedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsPicked.length ===2) {
            setTimeout(checkForMatch, 300)
        }
    }
    //initialize
    createBoard()

    //Timer
    // const seconds = 60
    // function setInterval(() => {
        
    // }, interval);

})