"use-strict"
window.addEventListener("load", function () {
 
  const productTemplate = document.querySelector("template").content.children[0];
  const productContainer = this.document.querySelector(".products-container"); 

  const cartTamplate = document.querySelector("template").content.children[1];
  const itemContainer = document.querySelector(".items-container"); 
  let shoppingList =[]
  const productItemData = severalDataObjects;

  configUI()


 
// create the display of items/products
  function configUI() {
    productItemData.forEach(function (product, index) {
      let newItem = productTemplate.cloneNode(true);
      newItem.querySelector(".add-to-cart-btn").setAttribute("data-index", index)
      // add event listener
        newItem.querySelector('.add-to-cart-btn').addEventListener('click', function(e){
          
          addItemToShoppongList(e.currentTarget.dataset.index);
          
          
          
          
        });

        
      const productTitle = newItem.querySelector('.card-title');
      const productImage = newItem.querySelector('.card-thumbnail');
      const productDescription = newItem.querySelector('.card-details');
      productTitle.innerHTML = product.title;
      productImage.src = product.url;
      productDescription.innerHTML = product.short;
      productContainer.appendChild(newItem)
    })

  
  }// close window event listener.

  function addItemToShoppongList(i){
    let cartItem = cartTamplate.cloneNode(true);
    
    cartItem.querySelector('.item-image').src = productItemData[i].url;
    cartItem.querySelector('.item-details h3').innerHTML = productItemData[i].title;
    cartItem.querySelector('.item-details p').innerHTML = productItemData[i].short;
    itemContainer.appendChild(cartItem);

    // shoppingList.push(productItemData[i])
    // if (shoppingList === 0) {
    //   console.log("list empty")

    // }else if(shoppingList.find(x=>x.)){
    //   shoppingList.push(cartItem);
    // }
    
    console.log(shoppingList)

      cartItem.querySelector('.remove-item').addEventListener("click", function(){
        itemContainer.removeChild(cartItem);
        shoppingList.pop(cartItem);

      
      })

    
  }
  

    
 


})