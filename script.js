let remainingCharDisplay = document.getElementById("max"); 
let totalCharDisplay = document.getElementById("min");     
let inputText = document.getElementById("input-text");
const maxCharLimit = 49; 

inputText.addEventListener("input", function() {
   
    let textValue = inputText.value; 
    let currentTotalChars = textValue.length; 
    let remainingChars = maxCharLimit - currentTotalChars;
    
    if(currentTotalChars<=49 &&  remainingChars>=1 ){
    
    remainingCharDisplay.textContent = remainingChars;
    totalCharDisplay.textContent = currentTotalChars;
    return;

    }
});

