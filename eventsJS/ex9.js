/*
Question 9

Réalisez le jeu du Pendu en Java.

Rappel de la règle :

Le Pendu est un jeu consistant à trouver un mot en devinant quelles sont les lettres qui le composent.

Le jeu doit faire découvrir un mot de 14 lettres qui sera stocké dans un tableau et sélectionné de façon aléatoire à chaque partie.

Vous trouvez des mots de 14 lettres sur ce site :

https://www.liste-de-mots.com/mots-nombre-lettre/14/

Le jeu doit afficher les lettres de l'alphabet.

Le joueur à 9 tentatives pour deviner le mot.

Ajoutez un message gagnant ou perdant à la fin.
*/

let listmots = [
    "chanstiquasses",
    "désenclaverait",
    "recommençasses",
    "remaquillaient",
    "controuvassent",
    "magnétomotrice",
    "commanditeriez",
    "pressurassions",
    "défeuillaisons",
    "rembarreraient",
    "sourdineraient",
    "désoxydassions",
    "madrigalisâmes",
    "téléopératrice",
    "cafouillerions",
    "rajeunissaient",
    "déséquilibrées",
    "déchloruraient",
    "désensibilisez",
    "désacralisâmes",
    "réenregistrera",
    "sophistiqueras",
    "shampooineuses",
    "proclameraient",
    "remblaveraient",
    "antéposeraient",
    "déchristianisé",
    "détapissassiez",
    "strangulerions",
    "désétatiserais",
    "antilogarithme",
    "scientificités",
    "rappareillerai",
    "grossoyassions",
    "imprégnassions",
    "mercantilismes",
    "contingenterai",
    "enrichissaient",
    "recombinassent",
    "initialisasses",
    "décomprimaient",
    "persillassions",
    "stipendierions",
    "décentralisait",
    "solubilisation",
    "mécanographies",
    "réinterprétait",
    "trypanosomiase",
    "défroissassiez",
    "conditionnelle",
    "singulariseras",
    "désatellisions",
    "criticaillions",
    "harnacheraient",
    "esquissassions",
    "encartouchions",
    "troussequinées",
    "conceptualisée",
    "mannequinerons",
    "décentralisera",
    "diphtonguerait",
    "encliquetèrent",
    "conseillerions",
    "saccharifiâtes",
    "photosensibles",
    "cyclomotoriste",
    "scandaliserais",
    "désacclimatais",
    "dépareillaient",
    "parapsychiques",
    "chirographient",
    "ornithomancies",
    "séculariserais",
    "rhétoriciennes",
    "déshumidifient",
    "starifiassions",
    "hérissonnèrent",
    "désétablissait",
    "proportionnons",
    "réensemencerez",
    "repositionnais",
    "rechampissions",
    "processionnais",
    "rétrogradaient",
    "désenchanteras",
    "universalistes",
    "urobilinogènes",
    "ridiculiserons",
    "goupillonnâmes",
    "réaccoutumions",
    "approfondirent",
    "affouageassiez",
    "réorganiserons",
    "désengorgeront",
    "départementaux",
    "casemateraient",
    "thésauriseront",
    "déshypothéquer",
    "significations",
    "carnifiassions",
    "retravailleras",
    "compromettriez",
    "rationaliserai",
    "escaladeraient",
    "solutionnèrent",
    "triséquassions",
    "enchâssassions",
    "chromosomiques",
    "controversasse",
    "désaimantasses",
    "désaliénassent",
    "aristotéliques",
    "opérationnelle",
    "barbouilleriez",
    "suréquipassiez",
    "engrumelassent",
    "ronflaguerions",
    "précambriennes",
    "virilisassions",
    "transformerons",
    "personnifiasse",
    "contrefoutrait",
    "infligeassions",
    "dépaquetterait",
    "centralisaient",
    "naufrageraient",
    "embringuassent",
    "contristassent",
    "ennuageassions",
    "pelotonnements",
    "garrotteraient",
    "astéréognosies",
    "réceptionnâtes",
    "alphabétisâmes",
    "réécouteraient",
    "parangonnerais",
    "embrouilleriez",
    "barricadassiez",
    "désenflammerez",
    "débusquassions",
    "instinctuelles",
    "enfourneraient",
  ];

window.addEventListener("load", nouveaumot);
document.getElementById("nouveaumot").addEventListener("click", nouveaumot);

let listspans = [];
let motATrouver;
let motATrouverClean;
let resultat;
let essaisRestants;
function nouveaumot(event) {
  event.preventDefault();
  let random = Math.floor(Math.random() * listmots.length);
  motATrouver = listmots[random];
  motATrouverClean = beaumot(motATrouver);
  essaisRestants = 9;
  document.getElementById("image").src = "ex9-imagesPendu/9.jpg";
  for (let i = 0; i < 26; i++) {
    listspans.push(document.createElement("span"));
    listspans[i].innerHTML = String.fromCharCode(97 + i);
    listspans[i].classList.add("bg-info", "m-1", "w-25", "rounded-circle");
    document.getElementById("listlettres").appendChild(listspans[i]);
    listspans[i].addEventListener("click", verifLettre);
    listspans[i].classList.remove("bg-danger", "bg-success");
    listspans[i].classList.add("bg-info");
  }
  resultat = "______________";
  document.getElementById("resultat").innerHTML = resultat;
}

function verifLettre(event) {
  let lettre = event.explicitOriginalTarget.textContent;
  listspans[lettre.charCodeAt(0) - 97].removeEventListener(
    "click",
    verifLettre
  );
  listspans[lettre.charCodeAt(0) - 97].classList.remove("bg-info");
  listspans[lettre.charCodeAt(0) - 97].classList.add("bg-danger");
  let flag = 0;
  for (let i = 0; i < 14; i++) {
    if (resultat[i] == "_") {
      if (motATrouverClean[i] == lettre) {
        resultat =
          resultat.substring(0, i) + motATrouver[i] + resultat.substring(i + 1, 14);
        document.getElementById("resultat").innerHTML = resultat;
        //console.log(resultat.substring(0,i-1), "|", resultat.substring(i,14), "=", resultat);

        listspans[lettre.charCodeAt(0) - 97].classList.remove("bg-danger");
        listspans[lettre.charCodeAt(0) - 97].classList.add("bg-success");
        flag = 1;
      }
    }
  }
  if (flag == 0){
    essaisRestants--;
    document.getElementById("image").src = "ex9-imagesPendu/" + essaisRestants + ".jpg" ;
    if (essaisRestants==0){
        youlose();
    }
  }
}

function youlose() {
    for (i=0;i<26;i++){
  listspans[i].removeEventListener(
    "click",
    verifLettre
  );
    }
    document.getElementById("resultat").innerHTML = motATrouverClean + " :(";


}

function beaumot(mot) {
    for (let i=0;i<14;i++){
        if (mot[i]=="é" || mot[i]=="è"){
            mot = mot.substring(0, i) + "e" + mot.substring(i + 1, 14);
        }
        if (mot[i]=="â" || mot[i]=="à"){
            mot = mot.substring(0, i) + "a" + mot.substring(i + 1, 14);
        }
        if (mot[i]=="ç"){
            mot = mot.substring(0, i) + "c" + mot.substring(i + 1, 14);
        }
    }
    return mot;
}