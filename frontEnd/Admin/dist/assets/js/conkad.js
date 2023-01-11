

let actionBtnProx = document.getElementById("actionProx")
let actionBtnLux = document.getElementById("actionLux")
let messageOne = document.getElementById("secOne")
let messageTwo = document.getElementById("secTwo")

// Button for starting the function to run the python file


// We hade to create fictional function as the Ajax dont work for demonstation

let prox = "114"
let lux = "112"



actionBtnProx.addEventListener("click", function(){
  
 // $.ajax({
   // type: "POST",
   // url: "kademlia/get.py",
   // data: { param: text}
 // }).done(function( o ) {
    
 //   return result
   messageOne.innerHTML = prox
  });
actionBtnLux.addEventListener("click", function(){
  
    // $.ajax({
      // type: "POST",
      // url: "kademlia/get.py",
      // data: { param: text}
    // }).done(function( o ) {
       
    //   return result
      messageTwo.innerHTML = lux
     });