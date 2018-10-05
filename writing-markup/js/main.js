 
 window.addEventListener("load",function(e){
    
    var item = document.createElement("div");
    var header  = document.createElement("header");
    var heading = document.createElement("h3");
    heading.innerHTML = "This is the page content";
    item.classList.add("card");
    
    header.appendChild(heading);
    item.appendChild(header);

    this.document.body.appendChild(item);
    console.log(item);
    
 })