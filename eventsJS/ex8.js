/*
Question 8

Réalisez le jeu du juste prix en JavaScript.

Le jeu doit afficher de façon aléatoire le nom et l'image de l'objet à trouver (5 objets de votre choix).

Le prix de l'objet est fixé de façon aléatoire dans une fourchette allant de 1 à 100 euros.

Une partie comporte 10 tentatives.

Afficher un message en cas de victoire ou d'échec.

Vous pouvez customiser le message de fin avec son, image, ou vidéo...
*/

window.addEventListener("load", nouvelObject);
document.getElementById("nouvelObject").addEventListener("click", nouvelObject);
document.getElementById("valider").addEventListener("click", validation);

let listimages = ["boiteConservationAvocatsAilCitronTomate5", "clefMoletteElectrique30", "lunettesPourChien24.9", "machineCapsulesPourBiberons42.5","mouleOeufsCarres4.9","passoireBoiteConserve3.9","reveilHaltere17.5","secheuseOreilles60","tongDecapsule60"];
let nomimages = ["Une boite de conservation d'avocats, d'ails, de citrons, et de tomates!", "Une clef à molette électrique!", "Des lunettes pour chien!", "Une machine à capsules pour biberons!","Un moule à oeufs carré!","Une passoire pour boîtes de conserve!","Un réveil à haltères!","Une sécheuse à oreilles!","Des tongs pour décapsuler!"];


let prixatrouver ;
let nbressaisrestants;
function nouvelObject (event) {
    event.preventDefault();
    let random = Math.floor(Math.random()*9);
    document.getElementById("currentObject").src = "ex8-ObjectsInutiles/" + listimages[random] + ".jpg";
    document.getElementById("nomimage").innerHTML = nomimages[random];
    prixatrouver = listimages[random].match(/[0-9.]+$/);
    document.getElementById("resultat").innerHTML = "";
    nbressaisrestants = 10;
}




function validation (event){
    event.preventDefault();
    nbressaisrestants--;
    let prixTente = document.getElementById("prixInput").value;
    if (prixTente == prixatrouver){
        document.getElementById("resultat").innerHTML = "C'est pl.. Non c'est gagné! :D";
        return;
    }
    if (prixTente < prixatrouver) {
            document.getElementById("resultat").innerHTML = "C'est plus. " + nbressaisrestants + " essais restants.";
        } else {
            document.getElementById("resultat").innerHTML = "C'est moins " + nbressaisrestants + " essais restants.";
    }
    if (nbressaisrestants == 0){
        document.getElementById("resultat").innerHTML += " Mais c'est perdu. Vous pouvez cependant continuer à chercher le prix";
    }
}
