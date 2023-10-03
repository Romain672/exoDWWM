/*
## Exercice 3
Les habitants de Zorglub paient l'impôt selon les règles suivantes :

- les hommes de plus de 20 ans paient l'impôt
- les femmes paient l'impôt si elles ont entre 18 et 35 ans
- les autres ne paient pas d'impôt

Le programme demandera donc l'âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l'habitant est imposable ou non.
*/
const age = prompt ("Bonjour habitant de Zorglub.\nQuel âge as-tu?");
const sexe = prompt ("Quel est-on sexe? (F/M)");

if (((sexe.toUpperCase()=="M" || sexe.toUpperCase()=="H") && age >= 20) || (sexe.toUpperCase()=="F" && age >= 18 && age <= 35)){
    alert("Félécitation! Tes impôts vont aider à financer les projets de la ville :)");
} else {
    alert("Félécitation! Tu n'as aucun impôt à payer :)");
}