/*
### Exercice 1

Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.

Exemple:    
addition(1, 2) ➞ 3  
addition(-2, -4) ➞ -6
*/

let nbr1 = prompt ("Entrer un premier nombre");
let nbr2 = prompt ("Entrer un premier nombre");
alert ("La somme des nombres est " + addition(nbr1, nbr2) + ".");


function addition (nbr1, nbr2){
    return nbr1*1 + nbr2*1;
}