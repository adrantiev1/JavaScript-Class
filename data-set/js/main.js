window.addEventListener("load", function(e){
    var dataArray = [];
    // use a loop to build out objects
    var cardObj= {
        id:1,
        src:"img/slide-1.jpg"
        

    };
    dataArray.push(cardObj);

    var objectView = document.querySelector('.card');
    objectView.addEventListener('click', function(e){
        console.log(e.currentTarget.dataset.index);
    });



});