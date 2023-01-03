# Memory Game
In this game, there is a four by three circle grid box. Each circle has another that matches it. Each player must flip over two cards in hopes that they will match, if they don't then it is the next player's turn. Whoever matches the most cards wins. 
## In this README.md you will find...
    - Wireframe
    - Technologies Used
    - User Stories
    - Psuedocode

## Wireframe
![Memory Game (1)](https://user-images.githubusercontent.com/113128158/210400440-7866ca0c-4f11-4dc3-b226-aa5808421e5d.jpg)

## Technologies Used
HTML, CSS, and JavaScript

## User Stories

As a User, I want to be able to...

### Version 1:
    - See my score 
    - Be able to match cards together
    - Game tells me when I've made a match
    - Game tells me if I win
### Version 2:
    - Match different cards
    - See my timer
    - Want to see when I mismatch
### Version 3:
    - Play against someone else
    - Make more matches than two image set
    
## Psuedocode

- document and add event listener.

- start with an array, with each card and img link.

- put in randomization.

- start with a grid display.

- create grid function to show gameboard.

- append.

- then create function for checking matches, using a for let loop.

- create alert with message, "You found a match!".

- set blank color and back side color of cards.

- push cards won.

- if no cards match and won, then alert, "Sorry, try again.".

- else if all cards are matched, then alert, "Congratulations! You found them all!".

- add the flip your card function.

- add a get attribute to function.

- add push to cards picked out.

- add push to cards result id.

- set the attribute.

- set a timeout to 500.

- lastly, initialize the functions with createBoard()
