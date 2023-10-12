/*
Question 3

Écrire un programme en JavaScript qui va demander à un utilisateur une heure , puis les minutes et enfin les secondes.

Votre programme affichera l'heure qu'il sera à la seconde suivante.

Nous partons du principe que l'heure saisie par l'utilisateur est valide !

Exemple :

Heure saisie : 17h30min22sec

Le programme affichera : 17h30min23sec.
*/

document.querySelector("button").addEventListener("click", fufu);
function fufu(event) {
    event.preventDefault();

  let heure = document.getElementById("heureInput").value;
  let minute = document.getElementById("minuteInput").value;
  let seconde = document.getElementById("secondeInput").value;

  seconde++;
  if (seconde == 60) {
    seconde = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      heure++;
      if (heure == 24) {
        heure = 0;
      }
    }
  }

  if (seconde < 10) {
    seconde = "0" + seconde;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (heure < 10) {
    heure = "0" + heure;
  }

  document.getElementById("resultat").innerHTML = "Dans une seconde il sera " + heure + "h" + minute + "m" + seconde + "s.";
}
