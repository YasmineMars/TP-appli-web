
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


function validation(){
   
    //Reinitialisation des div
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";

  //parcourir les champs  
  for(let item of document.querySelectorAll('.input-text')){

    if(item.value.length < 5){

      var label =   document.querySelector("label[for="+item.id+"]").textContent;

      // Si champs vide
      if(item.value.length == 0){
        document.getElementById("error").innerHTML += `La saisie du ${label} est obligatoire <br/>`; 

      }
      //si champs ne depasse pas 5 caractéres
      else{
          
        document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`; 
      }

      
      // afficher l'erreur
      document.getElementById("error").style.display = "block";

      //cacher le message de bienvenue
      document.getElementById("resultat").style.display = "none";
 
    }
      
  }
    if(document.getElementById("error").innerHTML == ""){
      
      var prenom = document.getElementById("prénom").value;
      document.getElementById("resultat").innerHTML = `Bienvenue  ${prenom}`;

      // afficher le message de bienvenue
      document.getElementById("error").style.display = "none";

     // cacher l'erreur
      document.getElementById("resultat").style.display = "block";

    }
}