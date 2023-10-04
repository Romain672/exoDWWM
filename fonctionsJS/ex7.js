/*
### Exercice 7
Deviner le nombre

On crée un nombre aléatoire entre 0 et 10, ensuite on demandera à l'utilisateur de deviner ce nombre avec 3 essais. Pour créer la logique on utilisera des fonctions spécifiques

- Une fonction `estBon(n)` qui renverra un booléen si l'utilisateur à la bonne réponse ou non
- Une fonction `deviner()` qui permet de faire un essai, cette fonction renverra true ou false en fonction de la réponse donnée
*/


const devinette = Math.floor(Math.random() * 11);

alert("J'ai choisi un nombre entre 0 et 10:");
const nbressaimax = 3;


let nbressairestant = nbressaimax;
while (nbressairestant > 0){
    if (deviner()==true){
        break;
    }
    nbressairestant--;
}
if (nbressairestant > 0){
    alert("Tu as gagné :)");
} else {
    alert("Tu as perdu :(");
}



function estBon (n) {
    if (n*1==devinette){
        return true;
    }
    return false;
}

function deviner() {
    return estBon (prompt("Essai " +  [nbressaimax - nbressairestant + 1] + "/" + nbressaimax + ":"));
}
