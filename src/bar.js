export default function bar() {
    let inputElement = document.getElementById('myInput');
    let inputValue = inputElement.value;
    alert(inputValue);
 }
 
 document.getElementById('submitButton').addEventListener('click', bar);