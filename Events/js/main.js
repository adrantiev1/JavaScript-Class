/* Event
element.addEventListner('Event type', event hendler function)
return value to the event object MouseEvent KeyBoardEvent
  properties of the event
  object.property
  e.proppertyName
  e.currentTrager returns what was clicked on inside the target
  e.target returns the target of the event (target = elemnt aEL)
  e.type

function on EventHandlerFunction (e){

}



*/

// var loginButton = document.querySelector('.member-sign-in button')
// loginButton.addEventListener('click', function(e){
//   console.log(e.target)
// });

//System Event App Init  
window.addEventListener('DOMContentLoaded', function(e){

  var firstInput = document.querySelector('input:first-of-type');
  var tax = document.querySelector('input:last-of-type');

  var result = document.querySelector('textarea');

  var calculattButton = document.querySelector('#member-sign-in button')
  calculattButton.addEventListener('click', onCalculate)

  function  onCalculate(event){
   

    console.log(event);
    var totalResult = parseFloat(firstInput.value) + (firstInput.value * (tax.value/100));
    result.value = "Total price is " + "$" + totalResult;
  }


})

