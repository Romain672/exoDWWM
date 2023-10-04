/*
### Exercice 8

Les nombres premiers

Créer une fonction `estPremier()` qui permet d'indiquer si un nombre est premier
*/
let nbr = prompt("Entre un nombre");
estPremier(nbr);
if (estPremier(nbr)==true) {
  alert("C'est un nombre premier.");
} else {
  alert("Ce n'est pas un nombre premier.");
}

function estPremier(nbr) {
  
if (nbr > 100000) {
  alert("Le nombre choisit est trop grand.");
} else {
  if (nbr < 0 || (nbr * 1).toFixed(0) != nbr) {
    alert("Le nombre n'est pas valide");
  } else {
    //coeur ==>
    let question = estDiviseur(2, nbr);
    switch (question) {
      case "bon":
        return true;
        break;
      case "faux":
        return false;
      break;
        deafut: alert("Le programme à buggé.");
    }
    //coeur <==
  }
}
}

function estDiviseur(i, nbr) {
  if (i > Math.sqrt(nbr)) {
    //bon
    return "bon";
  }
  if (nbr / i == Math.floor(nbr / i)) {
    //faux
    return "faux";
  }
  //bon pour l'instant
    return estDiviseur(i + 1, nbr);
}
