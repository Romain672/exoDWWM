/*
### Exercice 5

Écrivez un programme JavaScript pour inverser une chaîne de caractères. (Attention ça demande de la recherche dans la documentation)

Exemple:    
strReverse(‘Salut’) ➞ tulaS    
strReverse(‘Hello’) ➞ olleH
*/

const chaine = prompt ("Entrer une chaine de texte");
alert ("La chaine de texte inversé est " + strReverse(chaine) + ".");

function strReverse (oldchaine) {
    let newchaine = "";
    for (let i=0; i<oldchaine.length;i++) {
        newchaine = newchaine.concat(oldchaine[oldchaine.length - i - 1]);
    }
    return newchaine;
}