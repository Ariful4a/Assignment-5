const allBtn = document.getElementsByClassName('add-btn');

for(const btn of allBtn){
    btn.addEventListener('click', function (event){
        const price = document.getElementById('seat-price');
        const pric = price.innerText;
        console.log(pric);
        const divcontainer = document.getElementById('fff');
        const div = document.createElement('div');
        div.classList.add('flex');
    
        div.classList.add('gap-28');

        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p.innerText = ('A1');
        p2.innerText = ('Econome');
        p3.innerText =(pric);

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        divcontainer.appendChild(div);
        updateTotalCost(pric);
    });
}

function updateTotalCost(value){
    const totalCost = getconvertValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText =sum;
}




function getconvertValue (id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}