window.addEventListener('load',function(){

    const menuPanel = document.querySelector('.mobile-menu-panel');
    const menuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenuItems = document.createElement("ul");
    let menuState = false;
    
    configUI();


    function configUI(){
        // data comming in 
        let menuItemObj= {
            ref:"http://www.google.com",
            text:"google"
        }
        // palce it into the array
        let info = [];
        info.push(menuItemObj);

        // parses the array and build the display
        info.forEach(function(value, index){
            
            // build the markup using js
            let listElm = document.createElement("li");
            let anchorElm = document.createElement("a");
            listElm.appendChild(anchorElm);
            mobileMenuItems.appendChild(listElm);
            // setting up attribute

            anchorElm.setAttribute("href", value.ref);
            anchorElm.innerHTML = value.text;

        });
        menuPanel.appendChild(mobileMenuItems);
    }




    menuButton.addEventListener('click',function(e){
        menuState = !menuState;
        if (menuState) {
            console.log('close the menu')
            TweenLite.to(menuPanel, 0.25 ,{left:"0"})
        }else{
            console.log('open the menu');
            TweenLite.to(menuPanel, 0.35 ,{left:"-100vw"})
        }

    })


});
