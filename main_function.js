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


// show and hide button
function showAndHideButton(id){
    // hide all button 
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('trans-section').classList.add('hidden');

    // click show button 
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('bg-[#b4f461]');
}