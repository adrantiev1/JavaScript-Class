"use-strict"
window.addEventListener('load',function(){


    const productTemplate = document.querySelector("template").content;
    // getting data from the single.js file 
    const productItemData = severalDataObjects;
    const productsContainer = document.querySelector('.products-container');
    console.log(severalDataObjects); 

    // setDisplay()
    manyItemsDisplay()

    function manyItemsDisplay(){
        productItemData.forEach(function(product,index){
            let newItem = productTemplate.cloneNode(true);
            // newItem.setAttribute("data-index",index);
            const productTitle = newItem.querySelector('.card-title'); 
            const productDesc = newItem.querySelector('.card-details'); 
            const productUrl = newItem.querySelector('.card-thumbnail'); 
        
            productTitle.innerHTML =  product.title;
            productUrl.src = product.url;
            productDesc.innerHTML = product.descrption;

            console.log(newItem);  
            productsContainer.appendChild(newItem);  
            
        })
    }

    // set up single template Item
    // function setDisplay(){
    //     const productTitle = productTemplate.querySelector('.card-title'); 
    //     const productDesc = productTemplate.querySelector('.card-details'); 
    //     const productUrl = productTemplate.querySelector('.card-thumbnail'); 

       
        
    //     productTitle.innerHTML =  productItemData.map(x=>x.title);
    //     productUrl.src = productItemData.map(x=>x.url);
    //     productDesc.innerHTML = productItemData.map(x=>x.descrption);
        

    //     console.log(productTemplate);  
    //     document.body.appendChild(productTemplate);      
        
    // }
    
});