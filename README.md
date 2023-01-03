![Memory Game](https://media.git.generalassemb.ly/user/46970/files/3e389392-0ef1-4052-bd9b-3731201d4514)
# Memory Game
## Technologies Used:

HTML, CSS, JavaScript

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

- lastly, call the functions with createBoard()