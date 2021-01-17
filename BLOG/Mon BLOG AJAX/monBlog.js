/*----------------------------------------------Appel Accueil de base----------------------------------------------*/
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = JSON.parse(xhr.responseText);
        accueil(donnees);
    }
}
xhr.open("GET", "Accueil.json", true);
xhr.send();



function accueil(data){
    var txtAccueil = "";
    for(var d in data ){
    
        txtAccueil += "<article>";  
        txtAccueil += "<h2>"+data[d].titre+"</h2>";
        txtAccueil += "<p id='article0'>"+data[d].article+"</p>";
        txtAccueil += "<p id='article0'>"+data[d].parution+" "+data[d].Auteur+"</p>";  
        txtAccueil += "</article>";  
    }    
    document.querySelector("#contenu").innerHTML = txtAccueil;
} 
/*----------------------------------------------Fin appel Accueil de base----------------------------------------------*/

/*----------------------------------------------Appel Accueil sur click----------------------------------------------*/
document.getElementById("accueil").onclick = function (){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = JSON.parse(xhr.responseText);
        accueil(donnees);
    }
}
xhr.open("GET", "Accueil.json", true);
xhr.send();
}
function accueil(data){
    var txtAccueil = "";
    for(var d in data ){
        txtAccueil += "<article>";  
        txtAccueil += "<h2>"+data[d].titre+"</h2>";
        txtAccueil += "<p id='article0'>"+data[d].article+"</p>";
        txtAccueil += "<p id='article0'>"+data[d].parution+" "+data[d].Auteur+"</p>";  
        txtAccueil += "</article>";  
    }    
    document.querySelector("#contenu").innerHTML = txtAccueil;
} 
/*----------------------------------------------Appel appel Accueil sur clock----------------------------------------------*/

/*----------------------------------------------Appel Présentation via HTML----------------------------------------------*/
document.getElementById("presentation").onclick = function(){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = xhr.responseText;
        presentation(donnees);
    }
}
xhr.open("GET", "presentation.html", true);
xhr.send();
}

function presentation(data){
    document.getElementById("contenu").innerHTML = data;
}
/*----------------------------------------------Fin Appel Présentation via HTML----------------------------------------------*/

/*----------------------------------------------Appel Présentation via Json (non à jour)----------------------------------------------*/
/*function presentation(data){
    var txtPresentation = "";
    txtPresentation += "<section>";
    txtPresentation += "<h2>Présentation</h2>";
        for(var d in data){ 
            txtPresentation += "<p id='article0'>"+data[d].presentation+"</p>";
    }
    txtPresentation+= "</section>";       
    document.querySelector("#contenu").innerHTML = txtPresentation;
}*/
/*----------------------------------------------Appel appel Présentation via Json----------------------------------------------*/

/*----------------------------------------------Appel Contact via HTML----------------------------------------------*/
document.getElementById("contact").onclick = function(){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = xhr.responseText;
        contact(donnees);
    }
}
xhr.open("GET", "contact.html", true);
xhr.send();
}

function contact(data){
    document.getElementById("contenu").innerHTML = data;
}
/*----------------------------------------------Fin Appel contact via HTML----------------------------------------------*/

/*----------------------------------------------Appel Contact via Json----------------------------------------------*/
/*function contact(data){
    var txtContact = "";
    txtContact += "<section>";
    txtContact += "<h2>Formulaire de contact</h2>"
    txtContact += '<form method="post" action="formulaire.php" enctype="" name="contact">';
    txtContact += "<p>"
    for(var d in data){
        txtContact += "<p>"
        for(var d2 in data[d]){
            txtContact += data[d][d2];
        }
        txtContact += "</p>"
    }
    txtContact += "</p>"
    txtContact += "</section>";
    document.querySelector("#contenu").innerHTML = txtContact;
}*/
/*----------------------------------------------Fin Appel contact via Json----------------------------------------------*/

/*----------------------------------------------Appel Connexion----------------------------------------------*/
document.getElementById("connexion").onclick = function(){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = JSON.parse(xhr.responseText);
        connexion(donnees);
    }
}
xhr.open("GET", "connexion.json", true);
xhr.send();
}

function connexion(data){
    var txtConnexion ="";
    txtConnexion += '<h2 id="access">Accès à la page d\'administration</h2>';
    txtConnexion += '<div class="container">';
    txtConnexion += '<form id="formulaire" method="GET" action="administration.html">';
    for(var d in data){
        txtConnexion += "<div class='form-group2'>";
        for(var d1 in data[d]){
            txtConnexion += data[d][d1]+"<br>";
        }
        txtConnexion += "</div>";
    }
    txtConnexion += '<div class="form-group"><button  class="btn btn-primary">Connexion</button></div>';
    txtConnexion += "</form>";
    txtConnexion += "</div>";
    document.querySelector("#contenu").innerHTML = txtConnexion;

    var form = document.getElementById("formulaire");
    var login = document.getElementById("login");
    var pwd = document.getElementById("pwd");
    var errorLogin = document.getElementById("errorLogin");
    var errorPwd = document.getElementById("errorPwd");
    form.onsubmit = function(){
        if(login.value === "admin" && pwd.value === "admin"){
            return true;
        }else if(login.value !== "admin" && pwd.value !== "admin"){
            errorLogin.innerHTML="<br><span class='alert alert-danger'>Identifiant incorrect !</span>";
            errorPwd.innerHTML="<br><span class='alert alert-danger'>Mot de passe incorrect !</span>";
            return false;
        }else if(login.value !== "admin"){
            errorLogin.innerHTML="<br><span class='alert alert-danger'>Identifiant incorrect !</span>";
            errorPwd.innerHTML="";
            return false;
        }else if(pwd.value !== "admin"){
            errorLogin.innerHTML= "";
            errorPwd.innerHTML= "<br><span class='alert alert-danger'>Mot de passe incorrect !</span>";
            return false;
        }
    }
    
} 
/*----------------------------------------------Fin Appel connexion----------------------------------------------*/
