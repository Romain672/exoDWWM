/*
## Exercice 7+
On créera une variable `devinette` qui contiendra un nombre entre 0 et 10, l'objectif sera ensuite de faire deviner ce chiffre à l'utilisateur. Si l'utilisateur se trompe on lui donnera une indication "plus" ou "moins" pour l'orienter vers la bonne réponse.
*/
let devinette = Math.floor(Math.random() * 11);

let essai = prompt("J'ai choisi un nombre entre 0 et 10:\nPremier essai");
coeur (essai, devinette);

function coeur (essai, devinette) {
    if (essai==devinette) {
        return youwin();
    }
    if (essai < devinette) {
        return coeur (prompt("C'est plus!\nNouvel essai:"), devinette);
    } else {
        return coeur (prompt("C'est moins!\nNouvel essai:"), devinette);
    }
}
function youwin() {
    alert("C'est pl.. Non c'est gagné! :D");
}
