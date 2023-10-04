/*
### Exercice 2

Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

Exemple:    
minuteToSecond(4) ➞ 240    
minuteToSecond(3) ➞ 180
*/


const minutes = prompt ("Entrer un nombre de minutes");
alert ("Cela équivaut à " + minuteToSecond(minutes) + " secondes.");

function minuteToSecond(nbr1) {
    return nbr1 * 60;
}