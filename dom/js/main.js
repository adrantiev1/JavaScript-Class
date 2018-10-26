//On submit c
// create a data object
// first:
// last:
//place the data objects into an array


// window.addEventListener('load',function(){
//     let dataObj = {
//         first: 20,
//         last:30
//     }

//     let dataArray = [dataObj]
//     const inputFields = document.querySelectorAll('input[type=text]')
    

//     submitBut = document.querySelector('input[type=submit]');

//     submitBut.addEventListener('click',function(e){
//         e.preventDefault();
        

//         console.log(inputFields[0].value, inputFields[1].value);
        
        
//     });


// });

window.addEventListener('load',function(){
    let createdItems = []
    const inputForm = document.querySelector('.data-entry');
    
    inputForm.addEventListener('submit',function(){

        e.preventDefault();

        const inputItems = (e.currenttarget.elements);

        const dataObj = {
            first:inputItems[0].value,
            last:inputItems[1].value
        }

        
        createdItems.push(dataObj);
        console.log(createdItems);

        
    });

    displayButton.addEventListener('click',function(){

        createdItems.forEach((item,index) => {
            const listElm = document.createElement('li');
            listElm.classList.add('cart-item')
            listElm.innerHTML = createdItems[index].first + "" + createdItems[index+1];
            displyItems.appendChild(listElm);
        });
    });
    


});