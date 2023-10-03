/*
## Exercice 2

Un magasin de reprographie facture :

- 0,10 € les dix premières photocopies
- 0,09 € les vingt suivantes
- et 0,08 € au-delà.

Écrivez un algorithme qui demande à l'utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante.
*/
const nbrphotocopies = prompt("Combien de photocopies veux-tu?");
let prix = 0;
if (nbrphotocopies<=10) {
    prix = nbrphotocopies*0.1;
} else {
    if (nbrphotocopies<=30) {
        prix = nbrphotocopies * 0.09 + 0.1;
    } else {
        prix = nbrphotocopies * 0.08 + 0.4;
    }
}
alert("Le prix est de " + prix.toFixed(2) + " euros.");
