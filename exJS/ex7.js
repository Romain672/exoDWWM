/*
## Exercice 7
On créera une variable `devinette` qui contiendra un nombre entre 0 et 10, l'objectif sera ensuite de faire deviner ce chiffre à l'utilisateur. Si l'utilisateur se trompe on lui donnera une indication "plus" ou "moins" pour l'orienter vers la bonne réponse.
*/
let devinette = Math.floor(Math.random() * 11);

let essai = prompt("J'ai choisi un nombre entre 0 et 10:\nPremier essai:");
while (essai != devinette) {
    if (essai < devinette) {
        essai = prompt("C'est plus\n");
    } else {
        essai = prompt("C'est moins\n");
    }
}
alert("C'est pl.. Non c'est gagné! :D");
