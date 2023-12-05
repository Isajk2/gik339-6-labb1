const myCheckbox = document.getElementById('checkbox');
const myTextfield = document.getElementsByClassName('textfield');
const myButton = document.querySelector('button');
const myOutput = document.getElementById('output');

myButton.addEventListener('click', function() {
    console.log(myButton);
    myOutput.remove();
});

myCheckbox.addEventListener('click', function() { 
    console.log(myCheckbox);
    getvalue();  
});

for (let i = 0; i < myTextfield.length; i++) {
    myTextfield[i].addEventListener('input', function() {
    var input = myTextfield[1].value;
    myOutput.innerHTML=input;
    console.log(myTextfield[i]);
    });
}

function getvalue(){
    var inputValue = myTextfield[0].value;
    myOutput.style.backgroundColor = inputValue;
}