/*
### Exercice 6

Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

Exemple:    
getMax(5, 9, 1) ➞ 9    
getMax(2, 3, 10) ➞ 10
*/

let nbr1 = prompt ("Entrer un nombre");
let nbr2 = prompt ("Entrer un autre nombre");
let nbr3 = prompt ("Entrer un dernier nombre");
alert ("Le plus grand des trois nombres est " + getMax(nbr1, nbr2, nbr3) + ".");

function getMax (nbr1, nbr2, nbr3) {
    if (nbr1>nbr2 && nbr1>nbr3) {
        return nbr1;
    }
    if (nbr2>nbr3) {
        return nbr2;
    }
    return nbr3;
}