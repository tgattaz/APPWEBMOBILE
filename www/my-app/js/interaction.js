//declare function
function fctSwitch(){
    var btSwitch2 = document.getElementById("btSwitch");
    console.log("test");

    if (btSwitch2.innerText == "Allumer"){
        btSwitch2.innerText = "Eteindre";
        changeImage();

    } else if (btSwitch2.innerText == "Eteindre") {
        btSwitch2.innerText = "Allumer";
        changeImage();

    }

}

function changeImage()
{
  var x = document.getElementById("myImage");
  var v = x.getAttribute("src");
  if(v == "ampoule-off.jpg")
    v = "ampoule-on.jpg";
  else
    v = "ampoule-off.jpg";
  x.setAttribute("src", v);	
}

document.addEventListener("DOMContentLoaded", function(event) {

    //add event to button
    var btSwitch = document.getElementById("btSwitch");
    
    btSwitch.addEventListener("click", fctSwitch);
});