//declare function
function fctHello(){
    //récupérer le contenue de l'input inName
    var name = document.getElementById("inName");
    var strToShow = 'Bonjour monsieur';
    if (name.value) { strToShow += " " + name.value;}
    strToShow += " !"; 
    alert(strToShow);
}




function showHello(){
    alert('Test d alerte !');

}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Le nom est chargé");
    showHello();

    //add event to button
    var btHello = document.getElementById("btHello");
    btHello.addEventListener("click", fctHello);
});