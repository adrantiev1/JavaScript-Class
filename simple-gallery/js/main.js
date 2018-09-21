// create a button in the gallery that toggles
// the image on and off
window.addEventListener('DOMContentLoaded', function(){
 var button = document.querySelector('button');

button.addEventListener('click', onClickOnOff);

function onClickOnOff(){

    gallery.classList.toggle('hidden')
}
    
//  button.classList.toggle();



})

// window.addEventListener('DOMContentLoaded', function(){
//     // All our code is global to the function
//     var gallery = document.querySelector('.gallery');
//     // Inline style on the element
//     // gallery.style.backgroundColor = "blue";

//     // add remove a class from the attached css file
//     // elment.classList.add()
//     // elment.classList.remove()
//     // elment.classList.toggle()
//     gallery.classList.add('red');

// })