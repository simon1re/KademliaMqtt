

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


function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("secOne").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "get.py", true);
  xhttp.send();
}
