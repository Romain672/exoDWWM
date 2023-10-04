/*
## Exercice 5

Écrivez un algorithme qui a près avoir demandé un numéro de jour, de mois et d'année à l'utilisateur, renvoie s'il s'agit ou non d'une date valide.

Il n'est sans doute pas inutile de rappeler rapidement que :

- le mois de février compte 28 jours, sauf si l'année est bissextile, auquel cas il en compte 29.

- L'année est bissextile si elle est divisible par quatre. Toutefois, les années divisibles par 100 ne sont pas bissextiles, mais les années divisibles par 400 le sont.

Pour exprimer correctement en pseudo-code l'idée qu'un nombre A est divisible par un nombre B. Il suffit d'indiquer que le reste de la division entière de A par B est égal à zéro. Cette opération s'appelle le modulo. Nous pouvons donc dire que A est divisible par B si : Modulo(A,B) = 0
*/
const jour = prompt("Quel jour est-il?");
const mois = prompt("Quel mois est-il?");
const annee = prompt("Quel année est-il?");
let validite = new Boolean();

switch (mois) {
  case "1":
  case "3":
  case "5":
  case "7":
  case "8":
  case "10":
  case "12":
    if (jour < 1 || jour > 31) {
      validite = false;
    } else {
      validite = true;
    }
    break;
  case "4":
  case "6":
  case "9":
  case "11":
    if (jour < 1 || jour > 30) {
      validite = false;
    } else {
      validite = true;
    }
    break;
  case "2":
    if (jour < 1 || jour > 28) {
      if (jour == 29) {
        if (annee % 400 == 0 || (annee % 100 != 0 && annee % 4 == 0)) {
          validite = true;
        } else {
          validite = false;
        }
      } else {
        validite = false;
      }
    } else {
      validite = true;
    }
    break;
  default:
    console.log("Mois non valide.");
}
//console.log(validite);
if (validite == true) {
  alert("Date valide");
} else {
  alert("Date non valide");
}
