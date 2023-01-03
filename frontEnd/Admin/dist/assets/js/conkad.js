

let actionBtnProx = document.getElementById("actionProx")
let actionBtnLux = document.getElementById("actionLux")
let messageOne = document.getElementById("secOne")
let messageTwo = document.getElementById("secTwo")

// Button for starting the function to run the python file


results = 1
actionBtnProx.addEventListener("click", function(){
    if (results >= 0) {
        messageOne.innerHTML = "Results"
    }
    else {
        messageOne.innerHTML = "Results not found"
    }
   
})


actionBtnLux.addEventListener("click", function(){
    $.ajax({
        type: "GET",
        url: "kademlia/get.py",
        data: { param: text}
      }).done(function( o ) {
         console.log(data)
      });
})
