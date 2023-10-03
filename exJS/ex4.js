/*
## Exercice 4
Exercice 6

Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux :

- tarif bleu
- tarif vert
- tarif orange
- tarif rouge

Le tarif dépend de la situation du conducteur :

- un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.

- un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.

- un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà

- De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus de cinq ans. Ainsi, s'il satisfait à cette exigence, un client normalement "vert" devient "bleu", un client normalement "orange" devient "vert", et le "rouge" devient orange.

Écrire l'algorithme permettant de saisir les données nécessaires et de traiter ce problème. Avant de se lancer à corps perdu dans cet exercice, on pourra réfléchir un peu et s'apercevoir qu'il est plus simple qu'il n'en a l'air ! 
*/

const age = prompt ("Bonjour habitant de la Terre.\nQuel âge as-tu?");
const tempsdepuispermis = prompt ("Depuis combien d'années possèdes-tu le permis?");
const accidents = prompt ("Combien d'accidents as-tu eu?");
const tempsdanslacompagnie = prompt ("Depuis combien d'années es-tu dans cette compagnie?");
let tarif = 0;
if (age > 25) {
    tarif++;
}
if (tempsdepuispermis >= 2) {
    tarif++;
}
tarif = tarif - accidents;
if (tempsdanslacompagnie >= 5 && tarif >= 0) {
    tarif++;
}
alert (tarif);
switch (tarif) {
    case 3:
    alert ("Somptueux! Tu peux avoir un tarif bleu.");
    break;
    case 2:
    alert ("Excellent! Tu peux avoir un tarif vert.");
    break;
    case 1:
    alert ("Bien! Tu peux avoir un tarif orange.");
    break;
    case 0:
    alert ("Cool! Tu peux avoir un tarif rouge.");
    break;
    default:
    alert ("Désolé :( Aucun tarif pour toi.");
}

