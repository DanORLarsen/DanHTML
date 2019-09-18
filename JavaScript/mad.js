function nogetAndet(){
    if (document.getElementById("food").getAttribute('src') == '/billeder/torsketårn.PNG')
    {document.getElementById("food").src = "/billeder/græsk.PNG";
    document.getElementById("food-text").textContent = "Græsk";
}
    else{document.getElementById("food").src = "/billeder/torsketårn.PNG";
    document.getElementById("food-text").textContent = "Torsketårn";}
}