/*
### Exercice 4

Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2

Exemple:    
getSurface(8, 2) ➞ 8   
getSurface(7, 3) ➞ 10.5
*/

let base = prompt ("Entrer une base");
let hauteur = prompt ("Entrer une hauteur");
alert ("La surface du triangle est " + getSurface(base, hauteur) + ".");

function getSurface (base, hauteur) {
    return base * hauteur /2;
}