/*
## Exercice 1 
Écrire un algorithme qui va demander à l'utilisateur, l'heure qu'il est, en lui demandant d'abord l'heure, puis les minutes et enfin les secondes. L'algorithme devra ensuite afficher l'heure qu'il sera à la seconde suivante.

Nous partons du principe que l'heure saisie par l'utilisateur est valide !
*/
let heure = prompt("Quelle heure est-il?");
let minute = prompt("Quelle minute est-il?");
let seconde = prompt("Quelle seconde est-il?");

seconde++;
if (seconde==60) {
    seconde=0;
    minute++;
    if (minute==60) {
        minute=0;
        heure++;
        if (heure==24) {
            heure=0;
        }
    }
}

if (seconde<10){
    seconde = "0" + seconde;
}
if (minute<10){
    minute = "0" + minute;
}
if (heure<10){
    heure = "0" + heure;
}

alert("Dans une seconde il sera " + heure + "h" + minute + "m" + seconde + "s.");