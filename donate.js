// add input money card-1

document.getElementById('first-donate').addEventListener('click', function (event){
    event.preventDefault();
    
    const addMoney = inputFieldId('first-field');
    const mainBalance = textFieldId('main-balance');

    if(!isNaN(addMoney)){
        const balance = textFieldId('add-balance');
        const addNewBalance = balance + addMoney;

        if(addMoney > mainBalance){
            alert('Insufficient balance');
            return;
        }
        else if(addMoney < 0){
            alert('Negetive balance not allowed');
            return;
        }
        else{
            alert('Balance added');
        }

        // set balance
        document.getElementById('add-balance').innerText = addNewBalance;

        // main balance calculate 
        const updateBalance = mainBalance - addMoney;
        document.getElementById('main-balance').innerText = updateBalance;

        // transection section 
        const now = new Date();
        const createDiv = document.createElement('div');
        createDiv.classList.add('transaction-item');
        createDiv.innerHTML = `
            <div>
                <p class='pb-3 pl-2'>${addMoney} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
                <span class='pl-2'>Date:</span>
                <span>${now}</span>
            </div>`
            
        document.getElementById('transaction').appendChild(createDiv);

    }else{
        alert('Please enter a valid number');
    }


});
// add input money card-2

document.getElementById('second-donate-btn').addEventListener('click', function (event){
    event.preventDefault();
    
    const addMoney = inputFieldId('second-field');
    const mainBalance = textFieldId('main-balance');

    if(!isNaN(addMoney)){
        const balance = textFieldId('second-balance');
        const addNewBalance = balance + addMoney;
        if(addMoney > mainBalance){
            alert('Insufficient balance');
            return;
        }
        else if(addMoney < 0){
            alert('Negetive balance not allowed');
            return;
        }
        else{
            alert('Balance added');
        }



        // set balance
        document.getElementById('second-balance').innerText = addNewBalance;

        // main balance calculate 
        const updateBalance = mainBalance - addMoney;
        document.getElementById('main-balance').innerText = updateBalance;

         // transection section 
         const now = new Date();
         const createDiv = document.createElement('div');
         createDiv.classList.add('transaction-item');
         createDiv.innerHTML = `
             <div>
                 <p class='pb-3 pl-2'>${addMoney} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
                 <span class='pl-2'>Date:</span>
                 <span>${now}</span>
             </div>`
             
         document.getElementById('transaction').appendChild(createDiv);
        

    }else{
        alert('Please enter a valid number');
    }

 
});
// add input money card-1

document.getElementById('third-donate-btn').addEventListener('click', function (event){
    event.preventDefault();
    
    const addMoney = inputFieldId('third-field');
    const mainBalance = textFieldId('main-balance');

    if(!isNaN(addMoney)){
        const balance = textFieldId('third-balance');
        const addNewBalance = balance + addMoney;
        if(addMoney > mainBalance){
            alert('Insufficient balance');
            return;
        }
        else if(addMoney < 0){
            alert('Negetive balance not allowed');
            return;
        }
        else{
            alert('Balance added');
        }


        // set balance
        document.getElementById('third-balance').innerText = addNewBalance;

        // main balance calculate 
        const updateBalance = mainBalance - addMoney;
        document.getElementById('main-balance').innerText = updateBalance;

         // transection section 
         const now = new Date();
         const createDiv = document.createElement('div');
         createDiv.classList.add('transaction-item');
         createDiv.innerHTML = `
             <div>
                 <p class='pb-3 pl-2'>${addMoney} Taka is Donated for Aid for Injured in the Quota Movement</p>
                 <span class='pl-2'>Date:</span>
                 <span>${now}</span>
             </div>`
             
         document.getElementById('transaction').appendChild(createDiv);
        

    }else{
        alert('Please enter a valid number');
    }

 
});
