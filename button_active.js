// Active button function 
function setActive(button){
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}


// firs button 
document.getElementById('donate-main-btn').addEventListener('click', function(){
    setActive(this);
});

// second button
document.getElementById('show-history').addEventListener('click', function(){
    setActive(this);
});