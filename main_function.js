// add money input field function 

function inputFieldId(id){
    const inputValue = document.getElementById(id).value;
    const inputAmount = parseFloat(inputValue);
    document.getElementById(id).value = '';
    return inputAmount;
}


// add money to balance function

function textFieldId(id){
    const textValue = document.getElementById(id).innerText;
    const textAmount = parseFloat(textValue);
    return textAmount;
}
