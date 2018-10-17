'use strict'
window.addEventListener("click", function(){

    const someElements = Array.from(document.querySelectorAll('form fieldset'));
    // let samething = document.getElementsByTagName('input');
   

//    someElements.forEach(function(item,index) {

//        item.setAttribute("data-index",index);
//        item.addEventListener("click",function(e){
//         console.log(e.target);
//        });
       
//    });



    const fieldData = someElements.map(function(elem,index){
        
    });
    
this.document.querySelector('form').addEventListener("submit", function(){
    e.preventDefault();

    const formData = getFormElements()
    
})
console.log(formData);
function getFormElements(){
        let anArray = someElements.map(function(elem,index){
            return elem.value;
        });
        return anArray;
}
});
