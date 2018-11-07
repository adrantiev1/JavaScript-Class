window.addEventListener("load",function(){
    var getDataButton  = document.querySelector(".get-data-btn");
    //api location, json file, where the app data lives on load...
    const dataUrl= "data/data.txt"
    getDataButton.addEventListener('click', function(e){
        // request object
        let request = new XMLHttpRequest();
        request.open('GET',dataUrl);
        //call back function
        request.onload= function(e){

            if (request.status === 200) {
                console.log(request.responseText);
            }
        }

        request.send();
        
    
    });
});