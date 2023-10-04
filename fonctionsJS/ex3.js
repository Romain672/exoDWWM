/*
### Exercice 3

Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.

Exemple:    
increment(1) ➞ 2   
increment(4) ➞ 5
*/

const nbr = prompt ("Entrer un nombre");
alert ("Ce nombre augmenté de un est " + increment(nbr) + ".");

function increment (nbr1) {
    return (nbr1*1)+1;
}