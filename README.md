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
    - Flip one card at a time and see a character
    - Click a second card and see a character
    - See an alert when a match is made
    - See an alert that I've won if matched all cards
### Version 2:
    - Select new pair of cards if last two did match
    - See alert when pair does not match
    - See my timer
### Version 3:
    - Timer go out
    - Reset game

## Psuedocode
### V1
* See my score
    - Show score at the top, uses results to show
    
* Flip one card at a time and see a character
    - Click function on each card
    - Click cards one at a time
    - See character on other side 
    
* Click a second card and see a character
     - Click on second card
     - If card does not match, both cards flip back over
     - Else if cards match, turn blank/white
     - Added to score
     
* See an alert when a match is made
    - Alert 'You found a match!' when match is made
* See an alert that I've won if matched all cards
    - Alert 'Congratulations! You found them all!'
    
### V2
* Select new pair of cards if last two did match
    - If last two did not match, flip back over to green/gameboard
    - Alert 'Sorry, try again.'
    - Click function starts new set
    - If matched, flip to white/blank
    
* See my timer
    - Timer is set to 500
    
### V3    
* Timer go out
    - If timer goes out before all matches made, then game over
    - If all matches made before timer goes out, game won
    
* Reset game
    - Game resets when browser is refreshed