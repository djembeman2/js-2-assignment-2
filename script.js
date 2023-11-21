
// It's a good idea to declare all your variables.
// This will let our JS linter help us find 
// spelling errors among other things.
// Delaring with 'var' will make them global
// variables.

var aliceSays, bobSays, CarolSays, danSays, ellieSays, frankSays, harrySays, ivySays, jackSays;


// this variable is set to a string.
let theMessage = "Kathy loves Larry";

aliceSays = theMessage;
bobSays = aliceSays;
carolSays = bobSays;
danSays = carolSays;
ellieSays = danSays;
frankSays = ellieSays;
gregSays = frankSays;
harrySays = gregSays;
ivySays = harrySays;
jackSays = ivySays;

function sayMessages() {
    let aliceSays, bobSays,
    carolSays, danSays, ellieSays, gregSays,
    frankSays, harrySays, ivySays, jackSays
}
aliceElm = document.querySelector("#alice-says");
aliceElm.textContent = aliceSays;

bobElm = document.querySelector("#bob-says");
bobElm.textContent = bobSays;

let colorBtn;
// select the button for tells-lynndale
colorBtn = document.querySelector("#color-Swtich");
// create the function to run onclick
function tellcolor(){
  aliceSays = "Sunny Sunday";
 window.alert ("tellcolor")
  aliceElm.textContent = aliceSays;
  setMessages()
}

colorBtn.onclick =tellcolor
/// callback function 
// call setNames
'messages.js'
// to set the messages in the DOM.
setMessages();
