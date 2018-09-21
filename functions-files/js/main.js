
window.addEventListener('DOMContentLoaded', function (){

  var button = document.querySelector("button");
  button.addEventListener('click',exerciseFunction);

  function exerciseFunction(firstName, lastName){
    var firstName = document.querySelector('input:first-of-type');
    var lastName = document.querySelector('input:last-of-type');
    console.log("Your first name is: " + firstName.value + " and your last name is: "+ lastName.value )
}


});












