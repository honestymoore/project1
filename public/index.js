document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'naruto',
            img: 'public/images/naruto.jpg'
        },
        {
            name: 'kid naruto',
            img: 'public/images/kidnaruto.webp'
        },
        {
            name: 'sage naruto',
            img: 'public/images/sagenaruto.webp'
        },
        {
            name: 'sasuke',
            img: 'public/images/sasuke.png'
        },
        {
            name: 'sasuke1',
            img: 'public/images/sasuke1.jpeg'
        },
        {
            name: 'kid sasuke',
            img: 'public/images/kidsasuke.jpg'
        },
        {
            name: 'naruto',
            img: 'public/images/naruto.jpg'
        },
        {
            name: 'kid naruto',
            img: 'public/images/kidnaruto.webp'
        },
        {
            name: 'sage naruto',
            img: 'public/images/sagenaruto.webp'
        },
        {
            name: 'sasuke',
            img: 'public/images/sasuke.png'
        },
        {
            name: 'sasuke1',
            img: 'public/images/sasuke1.jpeg'
        },
        {
            name: 'kid sasuke',
            img: 'public/images/kidsasuke.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsPicked = []
    let cardsPickedId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'public/images/frontcard.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsPickedId[0]
        const optionTwoId = cardsPickedId[1]

        if (cardsPicked[0] === cardsPicked[1]) {

            cards[optionOneId].setAttribute('src', 'public/images/white.png')
            cards[optionTwoId].setAttribute('src', 'public/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsPicked)

        } else {
            cards[optionOneId].setAttribute('src', 'public/images/frontcard.png')
            cards[optionTwoId].setAttribute('src', 'public/images/frontcard.png')
        }

        cardsPicked = []
        cardsPickedId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Well done, young shinobi!'
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardsPicked.push(cardArray[cardId].name)
        cardsPickedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsPicked.length === 2) {
            setTimeout(checkForMatch, 300)
        }
    }

    createBoard()

})