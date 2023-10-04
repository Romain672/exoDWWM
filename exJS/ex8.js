/*
Nombre premiers
*/
let nbr = prompt("Entre un nombre");

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
        alert("C'est un nombre premier.");
        break;
      case "faux":
        alert("Ce n'est pas un nombre premier.");
      break;
        deafut: alert("Le programme à buggé.");
    }
    //coeur <==
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
