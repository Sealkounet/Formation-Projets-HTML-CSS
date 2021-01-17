//Appel accueil sur click
document.getElementById("accueil").onclick = function (){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = JSON.parse(xhr.responseText);
        getData(donnees);
    }
}
xhr.open("GET", "Accueil.json", true);
xhr.send();

}
function getData(data){
    var txtAccueil = "";
    for(var d in data ){
        txtAccueil += "<article>";  
        txtAccueil += "<h2>"+data[d].titre+"</h2>"; 
        txtAccueil += "<p id='article0'>"+data[d].article+"</p>";
        txtAccueil += "<p id='article0'>"+data[d].parution+" "+data[d].Auteur+"</p>";  
        txtAccueil += "</article>";  
    }    
    document.querySelector("#contenu2").innerHTML = txtAccueil;
} 
//Fin Appel accueil sur click


//Appel page d'administration de base
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var donnees = JSON.parse(xhr.responseText);
        administration(donnees);
    }
}
    xhr.open("GET", "administration.json", true);
    xhr.send();
       
    function administration(data){
        console.log("ok");
        var txt = "";
        var txt = "<table class='table table-stripped'>";
        txt += "<tr class='thead-light'><th>Titre</th><th>Vignette</th><th>Contenu</th><th>Parution</th><th>Auteur</th><th colspan=\"2\"'>Actions</th></tr>"
        txt += "<br><br>"
        for(var d1 in data){
        txt += "<tr>";
        for(var d2 in data[d1]){
            txt += "<td>"+data[d1][d2]+"</td>";     
    }
    txt += "<td><button class='btn btn-info'>Editer</button>&nbsp;<button class='btn btn-danger'>Supprimer</button></td>"
    txt += "</tr>";
    }       
    txt += "</table>";
    document.querySelector("#contenu2").innerHTML = txt;
    } 





    