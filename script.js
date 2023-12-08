// UPPGIFT 3 & 4
const checkBox = document.getElementById('style');
const textFieldColor = document.getElementById('color');
const textFieldContent = document.getElementById('content');
const allTextFields = document.getElementById('textfield'); // Fixa här
const button = document.getElementById('button');
const output = document.getElementById('output');
const box = document.getElementsByClassName('box');

// UPPGIFT 5
// Fördefinierad funktion som loggar till konsolen och uppdaterar outputen
function handleEvent(e) {
    console.log("Chosen:", e.target);
    const inputFieldName = e.target.name;
  
    if (inputFieldName == "content") {
      const valueContent = e.target.value;
      output.innerHTML = "<p>" + valueContent + "</p>";
    }
}

// Funktion för att ändra bakgrundsfärgen på outputsektionen
function changeBackgroundColor() {
    const colorValue = textFieldColor.value;
    output.style.backgroundColor = colorValue;
}

// UPPGIFT 6
// Lyssnare för knappklick
button.addEventListener('click', function() {
    output.remove();
});

// Lyssnare för ändring i checkbox
checkBox.addEventListener('change', function() {
    changeBackgroundColor();
});

// Lyssnare för inmatning i innehållsfältet
textFieldContent.addEventListener('input', function() {
    output.innerHTML = textFieldContent.value;
});

// Lägg till eventlyssnare för "input" på inmatningsfältet
textFieldContent.addEventListener('input', handleEvent);