// console.log();
// dot syntax
/* 
   JS
   Objects
     - properties
     - methods 
     - events

     Style EMCAScript
     - standard rules spec
     - ES5 spec
     - ES6
     - ES2017
     - ES2018

    Rules ECMA
    = dot syntax
    statement JS
    obj.(prop/method).value

    Property Statement
    object.prop = value
    navigator.name   //read only
    window.name="new window";  Read/Write  or Read Only

    Method Statement
    object.method('args');
    console.log('help me');

    Variables JS
    var name assignment operator  value
    creating variable names BP
      no numbers, no uppercase first Letter, = ? @ 
      no reserver charachter t ot the language.

      BP Var Naming
      be semantic about the content or use of the variable
       var albertaTaxRate = 0.25;
       albertTaxRate camel case;

       data types of variables
       string text ''
       123 number
       true and false   booleans
       array, function, dom elemements.

      
*/
// Decalaring a Variable
/* 
  Functions
  are action we can write.
  naming function variables
    -be descriptive ex: calculate tax on a product

    How do we call a function
*/

var albertaTaxRate = 0.05;

function calculateTax (price){
//Perform the action
  return  albertaTaxRate * price;
}

console.log('value returned', calculateTax(100));