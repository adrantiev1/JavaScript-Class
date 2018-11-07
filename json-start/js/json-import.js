window.addEventListener('load',function(){

    const dataFetchButton= document.querySelector('.get-data-btn');
    const dataRequestObj = new XMLHttpRequest();
    
    dataRequestObj.addEventListener('load',onDataReturn);
    const jsonDataURL = 'data/data.json';
    let applicationData = [];
    dataFetchButton.addEventListener('click',function(e){

        //create request object 
        dataRequestObj.open("GET", jsonDataURL);
        // request the data
        dataRequestObj.send();
    })
    function onDataReturn(e){
        if (dataRequestObj.status === 200) {
            // being we are using json we use JSON.parse()
            applicationData = JSON.parse(dataRequestObj.response);
        }else{
            console.log('no response')
        }
    }
});