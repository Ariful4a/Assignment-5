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

        const cartCount = getconvertValue('count');
        document.getElementById('count').innerText = cartCount + 1;
        const leftCartCount = getconvertValue('ll');
        document.getElementById('ll').innerText = leftCartCount - 1;


        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p.innerText = ('C1');
        p2.innerText = ('Economoy');
        p3.innerText =(pric);

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        divcontainer.appendChild(div);
        updateTotalCost(pric);
        updateGrandTotal();
    });
}

function updateGrandTotal(status){
    const totalCost = getconvertValue('total-cost');
    if(status == undefined){
        document.getElementById('grand-total').innerText = totalCost;

    }
    else{
        const couponCode = document.getElementById
        ('coupon-code').value;
       
        if(couponCode == 'NEW15'){
            const discounted = totalCost * 0.15;
            document.getElementById('grand-total').innerText = totalCost - discounted;
        }
        else{
            alert('Please enter valid coupon code');
        }
        
    }
    
    
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

function changeColor(){
    const greenColor = document.getElementById('make-color');
    greenColor.classList.add('bg-green-500')
}



function next(){
    const firstItem = document.getElementById('all-item');
    firstItem.classList.add('hidden');

    const nextItem = document.getElementById('next-section');
    nextItem.classList.remove('hidden');
}