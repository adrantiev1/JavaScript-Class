// your js here...
window.addEventListener('load',function(){
    var images = ['mountain1.jpg','mountain2.jpg','mountain3.jpg'];  
    var currentImg = 0;
    document.querySelector('.carousel>img').src = 'images/' + images[0];  
    let carusel = document.querySelector('.carousel').addEventListener('click',function(evt){
        var target = evt.target;
        if (target.classList.contains('prev') ) {
            console.log('control back' );
            if (currentImg === 0) {
                currentImg = 2;
            }else{
                currentImg -= 1;
            }
           
        }
        else{
            console.log('control forward');
            if (currentImg === 2) {
                currentImg = 0;
            }else{
                currentImg += 1;
            }
            
        }
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];  

    })

});