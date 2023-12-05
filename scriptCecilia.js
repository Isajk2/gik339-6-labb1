const myCheckbox = document.getElementById('style');
const myTextfieldColor = document.getElementById('color');
const myTextfieldContent = document.getElementById('content');
const myButton = document.getElementById('button');
const myOutput = document.getElementById('output');
const myBox = document.querySelector('.box');

myButton.addEventListener('click', function() {
    myOutput.remove();
});

myCheckbox.addEventListener('change', function() {
    changeBackgroundColor();
});

myTextfieldContent.addEventListener('input', function() {
    myOutput.innerHTML = myTextfieldContent.value;
});

function changeBackgroundColor() {
    const colorValue = myTextfieldColor.value;
    myBox.style.backgroundColor = colorValue;
}