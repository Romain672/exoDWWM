# Exercice JavaScript

## Exercice 1 
Écrire un algorithme qui va demander à l'utilisateur, l'heure qu'il est, en lui demandant d'abord l'heure, puis les minutes et enfin les secondes. L'algorithme devra ensuite afficher l'heure qu'il sera à la seconde suivante.

Nous partons du principe que l'heure saisie par l'utilisateur est valide !

## Exercice 2

Un magasin de reprographie facture :

- 0,10 € les dix premières photocopies
- 0,09 € les vingt suivantes
- et 0,08 € au-delà.

Écrivez un algorithme qui demande à l'utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante.

## Exercice 3
Les habitants de Zorglub paient l'impôt selon les règles suivantes :

- les hommes de plus de 20 ans paient l'impôt
- les femmes paient l'impôt si elles ont entre 18 et 35 ans
- les autres ne paient pas d'impôt

Le programme demandera donc l'âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l'habitant est imposable ou non.

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

## Exercice 5

Écrivez un algorithme qui a près avoir demandé un numéro de jour, de mois et d'année à l'utilisateur, renvoie s'il s'agit ou non d'une date valide.

Il n'est sans doute pas inutile de rappeler rapidement que :

- le mois de février compte 28 jours, sauf si l'année est bissextile, auquel cas il en compte 29.

- L'année est bissextile si elle est divisible par quatre. Toutefois, les années divisibles par 100 ne sont pas bissextiles, mais les années divisibles par 400 le sont.

Pour exprimer correctement en pseudo-code l'idée qu'un nombre A est divisible par un nombre B. Il suffit d'indiquer que le reste de la division entière de A par B est égal à zéro. Cette opération s'appelle le modulo. Nous pouvons donc dire que A est divisible par B si : Modulo(A,B) = 0

## Exercice 6 
Pour cet exercice on demandera à l'utilisateur (à l'aide de prompt) un nombre à l'utilisateur entre 0 et 10, on affichera ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0). Si l'utilisateur rentre un chiffre erroné on affichera un message d'erreur.

## Exercice 7
On créera une variable `devinette` qui contiendra un nombre entre 0 et 10, l'objectif sera ensuite de faire deviner ce chiffre à l'utilisateur. Si l'utilisateur se trompe on lui donnera une indication "plus" ou "moins" pour l'orienter vers la bonne réponse.