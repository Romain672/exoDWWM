/*
## Exercice 6 
Pour cet exercice on demandera à l'utilisateur (à l'aide de prompt) un nombre à l'utilisateur entre 0 et 10, on affichera ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0). Si l'utilisateur rentre un chiffre erroné on affichera un message d'erreur.
*/

let nbr = prompt("Entre un nombre entre 0 et 10");
let text = nbr;
if (nbr < 0 || nbr > 10 || (nbr*1).toFixed(0) != nbr) {
    alert("Erreur: mauvaise saisie.");
} else {
    for (let i=nbr-1;i>=0;i--) {
        text = text + "," + i;
    }
    alert(text);
}








