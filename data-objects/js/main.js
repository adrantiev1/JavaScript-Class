/* 
                  JavaScript
Containers
-array   
dataArray=[]

-object
dataObject={}


*/

// window.addEventListener("load", function(e){
//     var product = document.querySelector(".card");
//     var dataArray =[]
//       var producItemObj ={
//           id:0,
//           src: "img/strain-1.jpg",
//           title: "Lemon Haze",
//           shortdescription: "full of lemmony goodness and you get mashed"
//       }

//       product.addEventListener("click", function(e){
//           //access the data index
//           // elm.dataset.name
//           // data-index
//           console.log(e.currentTarget.dataset.index)
//       })
//     /* 
//      Methods of the Array Object
//      push() - appends the content between the braces into the last
//               position in the array
//     */

//      dataArray.push(producItemObj)
//      console.log(dataArray)

//     // Getting the value of an objects property
//     //  obj.property 
//     // 
//     // Set the value of an objects property.
//     //   obj.property = new value

     
// })

window.addEventListener("load",function(){

    var productObject1={
        id:0,
        src:"img/strain-3.jpg",
        name:"Girl scout coockies",
        genetics: "hybrid",
        ratio:"80% Stiva 20% Indica"
    }
    var productObject2={
        id:1,
        src:"img/strain-6.jpg",
        
    }
    var productObject3={
        id:2,
        src:"img/strain-4.jpg",
        
    }
    //Pull the data place it into an array
    //array of data object JSON
    var dataArray=[]


    //Place data object in the array
    //Push - array method push()
    dataArray.push(productObject1);
    dataArray.push(productObject2);
    dataArray.push(productObject3);

   
    document.querySelector('.product1').addEventListener("click", onUpdateDisplay);
    document.querySelector('.product2').addEventListener("click", onUpdateDisplay);
    document.querySelector('.product3').addEventListener("click", onUpdateDisplay);

    function onUpdateDisplay(e){
        var dataIndex = e.currentTarget.dataset.index;
        
        switch (dataIndex) {
            case "0":
                setDisplay(dataArray[0])
                break;
            case "1":
                setDisplay(dataArray[1])
                break;
            case "2":
                setDisplay(dataArray[2])
                break;
        }
    }
    // custom function

    function setDisplay(obj){
        document.querySelector(".image-display img").src = obj.src; 
    } 

        // var dataIndex = e.currentTarget.dataset.index;



        
        // if (dataIndex === "0" ) {
        //     console.log("Parse the data/update Display");
        //     // dataIndex = Number(dataIndex);

        //     // if (dataIndex !== NaN) {
        //     //     console.log("dataIndex is a Number")
        //     // }

        //     var tempObj = dataArray[dataIndex];
            
        //     // set display object
        //     document.querySelector(".image-display img").src = tempObj.src;
        // }
        // else{
        //     console.log("error in the data")
        // }
    
});