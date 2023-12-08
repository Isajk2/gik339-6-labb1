// UPPGIFT 3 & 4


const myCheckbox = document.getElementById('style');
const myTextfieldColor = document.getElementById('color');
const myTextfieldContent = document.getElementById('content');
const myButton = document.getElementById('button');
const myOutput = document.getElementById('output');
const myBox = document.querySelector('.box');


// UPPGIFT 5


// Funktion för att ändra bakgrundsfärgen på outputsektionen
function changeOutputBackgroundColor() {
    const colorValue = myTextfieldColor.value;
    myOutput.style.backgroundColor = colorValue;
}

// UPPGIFT 6


// Lyssnare för inmatning i innehållsfältet
myTextfieldContent.addEventListener('input', function() {
    // Uppdatera utdatasektionen med inmatat värde
    myOutput.innerHTML = myTextfieldContent.value;
});

// Lyssnare för knappklick
myButton.addEventListener('click', function() {
    // Ta bort utdatasektionen
    myOutput.remove();
});

// Lyssnare för ändring i checkbox
myCheckbox.addEventListener('change', function() {
    // Anropa funktion för att ändra bakgrundsfärgen på utdatasektionen
    changeOutputBackgroundColor();
});



// LEK



// Lyssnare för tangenttryckning i innehållsfältet
myTextfieldContent.addEventListener('keyup', function(event) {
    // Om Enter-tangenten trycks ned (key code 13)
    if (event.keyCode === 13) {
        // Visa boxen igen med det nya meddelandet
        showBox();
    }
});

// Funktion för att ändra bakgrundsfärg baserat på färginmatning
function changeBackgroundColor() {
    // Hämta färgvärdet från färginmatningen
    const colorValue = myTextfieldColor.value;
    // Tillämpa färgen på box-elementet
    myBox.style.backgroundColor = colorValue;
}

// Funktion för att visa boxen
function showBox() {
    // Återskapa utdatasektionen om den tidigare togs bort
    if (!myOutput.parentElement) {
        myBox.appendChild(myOutput);
    }
}