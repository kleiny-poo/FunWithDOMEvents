# FunWithDOMEvents

## Lesson
To implement DOM events, use the process flow:
1. Identify the element you are watching/targetting
2. Set an event listener on it with what you're listening for and referencing the function that should be invoked when the even occurs
3. Write a function with all of the things that should happen once the event is triggered


## Challenges
**Challenge Zero: ** Make the “play” button move to random locations as you click it
**Challenge One: ** When you double-click a piece of text, make the text “disappear”
**Challenge Two: ** When you mouseover the button, the background color of it changes
**Challenge Three: ** When you copy (command + c) the title “Gotta catch em all,” an alert appears warning you not to
**Challenge Four: ** When you right click on any element in the body, the background changes to a different image


## Example
```javascript
#identify the element you are watching/targetting
let playButton = document.getElementById("play-button");
#set an event listener on it with what you\'re listening for and referencing the function that should be invoked when the even occurs
playButton.addEventListener("click", myEventHandler);

#write a function with all of the things that should happen once the event is triggered
  #Pseudocode the function - what should occur when that event is triggered?
  #Test the function & debug
function myEventHandler() {
  alert ("Hello World!");
}
```

## Relevant DOM Events
* click →  “click”
* double click → “dblclick”
* mouse over → “mouseover” 
* copy → “copy”
* right click → “contextmenu”
