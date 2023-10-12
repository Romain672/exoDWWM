/*
Question 6

Réalisez une application de gestion qui calcul la prime d'assurance d'un client.

Rappel de l'énoncé du cours d'algorithme :

Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge.

Le tarif dépend de la situation du conducteur :

• un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.

• un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.

• un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà.

• De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus d'un an.

Dans tous les cas on refuse un conducteur qui aurait plus de 3 accidents.
*/

document.querySelector("button").addEventListener("click", submitform);

function submitform(event) {
    event.preventDefault();
  const age = document.getElementById("ageInput").value;
  const tempsdepuispermis = document.getElementById("permisInput").value;
  const accidents = document.getElementById("accidentsInput").value;
  const tempsdanslacompagnie = document.getElementById("anneesInput").value;
  let tarif = 0;
  if (age > 25) {
    tarif++;
  }
  if (tempsdepuispermis >= 2) {
    tarif++;
  }
  tarif = tarif - accidents;
  if (tempsdanslacompagnie >= 5 && tarif >= 0) {
    tarif++;
  }
  
let r = "";
  switch (tarif) {
    case 3:
      r = "Somptueux! Tu peux avoir un tarif bleu.";
      break;
    case 2:
      r = "Excellent! Tu peux avoir un tarif vert.";
      break;
    case 1:
      r = "Bien! Tu peux avoir un tarif orange.";
      break;
    case 0:
      r = "Cool! Tu peux avoir un tarif rouge.";
      break;
    default:
      r = "Désolé :( Aucun tarif pour toi.";
  }
  document.getElementById("resultat").innerHTML = r;


  if (tempsdanslacompagnie == "Saisissez le nombre d'années:"){
    document.getElementById("anneesInput").style.borderColor = "red";
    document.getElementById("anneesInput").style.borderWidth = "2px 10px";
    document.getElementById("resultat").innerHTML = "Veuillez rentrer un nombre d'années depuis que vous avez le permis valide";
} else {
    document.getElementById("anneesInput").style.borderWidth = "0";
}
if (accidents == "Saisissez le nombre d'accidents:"){
  document.getElementById("accidentsInput").style.borderColor = "red";
  document.getElementById("accidentsInput").style.borderWidth = "2px 10px";
  document.getElementById("resultat").innerHTML = "Veuillez rentrer un nombre d'années depuis que vous avez le permis valide";
} else {
  document.getElementById("accidentsInput").style.borderWidth = "0";
}

  if (tempsdepuispermis <0 || tempsdepuispermis > 102 || tempsdepuispermis == ""){
    document.getElementById("permisInput").style.borderColor = "red";
    document.getElementById("permisInput").style.borderWidth = "2px 10px";
    document.getElementById("resultat").innerHTML = "Veuillez rentrer un nombre d'années depuis que vous avez le permis valide";
} else {
    document.getElementById("permisInput").style.borderWidth = "0";
}
if (age <1 || age > 120){
    document.getElementById("ageInput").style.borderColor = "red";
    document.getElementById("ageInput").style.borderWidth = "2px 10px";
    document.getElementById("resultat").innerHTML = "Veuillez rentrer un age valide";
} else {
    document.getElementById("ageInput").style.borderWidth = "0";
}
}
