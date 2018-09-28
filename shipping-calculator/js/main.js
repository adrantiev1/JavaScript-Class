/*
FORMS



*/ 


// window.addEventListener("DOMContentLoaded", function(){
//     var submitButton = document.querySelector("form");
    
//     // make sure the form event type is submit
//     // prevent the form from submiting the data
//     // we parse and check the form fields.
//     submitButton.addEventListener("submit", function(e){
//         e.preventDefault();
//         console.log("submit the form");

//     });



// });
// Objects
window.addEventListener("DOMContentLoaded", function(){
    // ref object variable
    var imageObj = {
        // NO camel casing for properties!!!
        id:1,
        src:" img/visa.png"
    }


    var jim = document.querySelector(".jim")

    jim.addEventListener("click", function(e){
       var whichObj = e.currentTarget.dataset.id;
       if(whichObj === "1")
       {    
            console.log("using this object " + imageObj.name);
       }
       if(whichObj === "2")
       {    
            console.log("using this object " + imageObj.name);
       }
       if(whichObj === "3")
       {    
            console.log("using this object " + imageObj.name);
       }
            
        
    });
    
   



});