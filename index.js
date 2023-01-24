document.addEventListener('DOMContentLoaded', () => { // unnecessary with defer option on the script tag
    
        //the card options
        const cardArray = [// this entire array is indented 1 level too many 
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
    cardArray.sort(() => 0.5 - Math.random())// nice use of JS sort with a-b pattern, should this be in a function ? consider an initialize function, will help with reset as well

    //selectors // global variables should go as far up to the top of the file as possible
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsPicked = [] // miss leading name for variable makes me think it will hold the entire card object, not just the name - also unsure if it's supposed to reference the dom cards OR the JS array above
    let cardsPickedId = [] // has id so is less miss leading than above but still is not clear if it should contain ids from your js cards array or the dom elements ( this pattern will be especially confusing when working with databases that also give our objects IDs)
    let cardsWon = [] // arrays and and other reference types should be declared with const, we will still be able to mutate the contents but won't be able to accidentally make the whole thing undefined, null or, an empty string etc. ( you did this properly on line 4)
    
    //gameboard with flipCard function
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/frontcard.png')
            card.setAttribute('data-id', i)// nice use of data value, wish we called it anything but id since id is an existing css identifier that is supposed to be unique. carNumber, cardIndex, arrayIndex etc all would be more ideal
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    //check matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')// see other naming convention comments, consider domCards, htmlcards etc 
        const optionOneId = cardsPickedId[0]
        const optionTwoId = cardsPickedId[1]
        //make a match
        if (cardsPicked[0] === cardsPicked[1]) {
            window.alert('Nice job! Keep going and you will be the next Hokage!')// we never want to use alert because it detracts from our apps by shifting the focus away from it and forces the user to click it before returning to the app - this was a project fail condition so I'm surprised to see it here. Do not use this in the future
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsPicked)
        //no match made
        } else {
            cards[optionOneId].setAttribute('src', 'images/frontcard.png')
            cards[optionTwoId].setAttribute('src', 'images/frontcard.png')
            window.alert('No match! Follow your ninja way!')
        }
        //all matches made
        cardsPicked = []// looks like the beginning of a reset function ! ( good thing)
        cardsPickedId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Well done, young shinobi!'
        }
    } 
   
    //flipping cards
    function flipCard() { // we don't remove the click event listener in here or stop the user from picking a card again after it is flipped so a card can match itself 
        const cardId = this.getAttribute('data-id')// see line 69
        cardsPicked.push(cardArray[cardId].name)// interesting use of your game array ! 
        cardsPickedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsPicked.length ===2) {
            setTimeout(checkForMatch, 300) // also because of the 104 comment + this timer, we can select 3+ cards if we're fast enough and the 3rd card will not flip back despite not being in the selection array. 
        }
    }
    //initialize 
    createBoard()

    //Timer 
//     var seconds = 60
//     var timer
//     function myFunction() {
//     if(seconds < 60) {
//         document.getElementById("timer").innerHTML = seconds
//     }
//     if (seconds >0 ) { //so it doesn't go to -1
//         seconds--
//     } else {
//      clearInterval(timer)
//     }
// }

// document.getElementById("timer").innerHTML="1:00";

})