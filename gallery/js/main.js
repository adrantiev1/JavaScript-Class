/* 
Simple Gallery Build
var imageArray=['img/css.png', img/html.png',]
var imageTaglineArray=[]
get buttons responsive on click event


set up condityion to check which button is being clicked.
log out the element being clicked either
fwd
bck


state var that represents
the count

++ count forward button click
-- count back button click

change the image using
elemRef.src = "url"
constrain the count between 0 and 2
*/
window.addEventListener("DOMContentLoaded",function(){
    var backButton = document.querySelector('.back-btn');
    var forwardButton = document.querySelector('.forward-btn');
    var gallery = document.querySelector('.gallery-controls')
    var img = document.querySelector('.gallery-display img')
    var count = 0;
    var imgs = ["img/html.png", "img/css.png", "img/javascript.png"];
    backButton.addEventListener('click',onclick);
    forwardButton.addEventListener('click',onclick);

    function onclick(e)
    {
        if (e.currentTarget === backButton) {
            
                console.log(e.target,"left button");

                if( count === 2 || count === 1)  
                {
                    count--;    
                    img.src = imgs[count];
                }  

                
                
        } else {
            
                console.log(e.target, "right button");
                     
                
                if( count === 0 || count === 1)  
                {
                    count++;    
                    img.src = imgs[count];
                }  

        }

    }

// instructors solution
/*
window.addEventListener("DOMContentLoaded", function(e){
    var galleryForwardButton = document.querySelector(".forward-btn");
    var galleryBackButton = document.querySelector(".back-btn");
    var galleryImageArray =["img/html.png", "img/css.png", "img/javascript.png"];
    var galleryPointer = 1
    document.querySelector(".gallery-display img").src = galleryImageArray[galleryPointer]
    
    galleryForwardButton.addEventListener("click", function(e){
             if(galleryPointer >= 2){
                galleryPointer =2;
             }else{
                 galleryPointer ++
             }
             document.querySelector(".gallery-display img").src = galleryImageArray[galleryPointer]
    })

    galleryBackButton.addEventListener("click", function(e){
        if(galleryPointer <= 0){
            galleryPointer = 0;
         }else{
             galleryPointer --
         }
         document.querySelector(".gallery-display img").src = galleryImageArray[galleryPointer]
    })
})



*/    
    

    
    
    



});