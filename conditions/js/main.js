/* 
Conditions

Types One and Two
Syntax Structure Type One

if(condition){
}

condition: this where you ask the  question
maxhine/language respond true or false 

*/
// ==
//=== strict equality
// ! not
// Logical &&



// state variable represents the video is playing
/* var isPlaying = true;

if(isPlaying ){
    console.log("the video is playing")
}else{

} */


/* 
Power Switch
on/off

Type Two Conditional
Manipulate a state variable

Window/Button UI-State variable to represent the condition
of the window is it open or closed

*/
/* 
var refVar Button
var refVar Window
var stateVar that represents the current visibility of the window */

window.addEventListener("DOMContentLoaded",function(){
var windowViewState = false;
var mobileMenuButton = document.querySelector('button');
var mobileMenu = document.querySelector('div.window');

mobileMenuButton.addEventListener('click', function(){
    if(windowViewState === true){
        windowViewState = false;
        console.log('hide the window');
    }else{
        windowViewState = true;
        
        console.log('show the window');
    }
});




});
