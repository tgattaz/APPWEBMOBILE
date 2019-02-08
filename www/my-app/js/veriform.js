document.addEventListener("DOMContentLoaded", function(event) {

    //add event to form
    console.log("je fonctionne vraiment très très bien.");
    var btSwitch = document.getElementById("frmInscr");
    
    var nom = document.getElementById("nom");
    nom.addEventListener("focus", function () {
        document.getElementById("aidenom").textContent = "Le nom doit comprendre entre 6 et 24 caracteres";
    })
    nom.addEventListener("input", function () {
        verifnom(nom);
    });
    nom.addEventListener("blur", function () {
        finnom(nom);
        document.getElementById("aidenom").textContent = "";
    });

    var prenom = document.getElementById("prenom");
    prenom.addEventListener("focus", function () {
        document.getElementById("aideprenom").textContent = "Le prenom doit comprendre entre 5 et 22 caracteres";
    })
    prenom.addEventListener("input", function () {
        verifprenom(prenom);
    });
    prenom.addEventListener("blur", function () {
        finprenom(prenom);
        document.getElementById("aideprenom").textContent = "";
    });

    var age = document.getElementById("age");
    age.addEventListener("focus", function () {
        document.getElementById("aideage").textContent = "L'age doit etre compris entre 4 et 44 ans";
    })
    age.addEventListener("input", function () {
        verifage(age);
    });
    age.addEventListener("blur", function () {
        finage(age);
        document.getElementById("aideage").textContent = "";
    });

    var Pseudo = document.getElementById("Pseudo");
    Pseudo.addEventListener("focus", function () {
        document.getElementById("aidepseudo").textContent = "Le pseudo doit etre compris entre 8 et 17 caracteres";
    })
    Pseudo.addEventListener("input", function () {
        verifpseudo(Pseudo);
    });
    Pseudo.addEventListener("blur", function () {
        finpseudo(Pseudo);
        document.getElementById("aidepseudo").textContent = "";
    });

    var mdp = document.getElementById("mdp");
    var mdp2 = document.getElementById("mdp2");

    mdp.addEventListener("focus", function () {
        document.getElementById("aidemdp").textContent = "Le mot de passe doit etre compris entre 7 et 22 caracteres";
    });
    mdp.addEventListener("input", function () {
        verifmdp(mdp);
    });
    mdp.addEventListener("blur", function () {
        finmdp2(mdp,mdp2);
        document.getElementById("aidemdp").textContent = "";
    });


    mdp2.addEventListener("focus", function () {
        document.getElementById("aidemdp2").textContent = "Le mot de passe de confirmation doit etre identique a celui d origine";
    });
    mdp2.addEventListener("input", function () {
        verifmdp2(mdp,mdp2);
    });
    mdp2.addEventListener("blur", function () {
        finmdp2(mdp,mdp2);
        document.getElementById("aidemdp2").textContent = "";
    });

});

function verifnom(champ)
{
   if(champ.value.length < 6 || champ.value.length > 24)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function finnom(champ)
{
    if(verifnom(champ))
    {
      console.log(verifnom(champ));       
      champ.style.backgroundColor = "";
    }
}   

function verifprenom(champ)
{
   if(champ.value.length < 5 || champ.value.length > 22)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function finprenom(champ)
{
    if(verifprenom(champ))
    {
      console.log(verifprenom(champ));       
      champ.style.backgroundColor = "";
    }
}  

function verifage(champ)
{
   if(champ.value < 4 || champ.value > 44 || isNaN(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function finage(champ)
{
    if(verifage(champ))
    {
      console.log(verifage(champ));       
      champ.style.backgroundColor = "";
    }
}  

function verifpseudo(champ)
{
   if(champ.value.length < 8 || champ.value.length > 17)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function finpseudo(champ)
{
    if(verifpseudo(champ))
    {
      console.log(verifpseudo(champ));       
      champ.style.backgroundColor = "";
    }
} 

function verifmdp(champ)
{
   if(champ.value.length < 7 || champ.value.length > 22)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifmdp2(champ, champ2)
{
   if(champ.value != champ2.value)
   {
      surligne(champ2, true);
      return false;
   }
   else
   {
      surligne(champ2, false);
      return true;
   }
}

function finmdp2(champ, champ2)
{
    if(verifmdp2(champ, champ2))
    {
      console.log(verifmdp2(champ, champ2));       
      champ.style.backgroundColor = "";
      champ2.style.backgroundColor = "";
    }
} 


function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "#afb";
}

function verifradio(){
    var nb= document.getElementById("nb");
    var femme= document.getElementById("femme");
    var homme= document.getElementById("homme");

    if( nb.checked || femme.checked || homme.checked){
        return true
    }
    else{
        alert("pas bon");
        document.getElementById("aideradio").textContent = "Aucun des boutons radio n'a ete coche !";
        return false
    }
}

function validateForm(event)
{
        event.preventDefault();
        if(!verifnom(nom) || !verifprenom(prenom) || !verifage(age) || !verifpseudo(Pseudo) || !verifmdp(mdp) || !verifmdp2(mdp,mdp2) || !verifradio())
        { 
          alert("marche pas");
          return false;
        }
        else
        {
            alert("marche");
            return true;
        }
}