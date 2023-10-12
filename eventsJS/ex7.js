/*
Question 7

Réalisez un programme en JavaScript qui demande à l'utilisateur un mot de passe.

Contrôlez la force du mot passe.

Créez votre propre algorithme qui déterminera si le mot de passe saisi est sécurisé ou pas.

Nous avons quatre cas possibles:

    Très sécurisé

    Sécurisé

    Moyen

    Dangereux
*/

let lastprogressbar = 0;
document.getElementById("puissanceMotdePasse").addEventListener("change", fufu);
function fufu(event) {
  event.preventDefault();
  const motdepasse = document.getElementById("puissanceMotdePasse").value;

  /*
    critere[0]: combien de minuscules il y a
    critere[1]: combien de majuscules
    critere[2]: combien de chiffres
    critere[3]: combien d'autres caractères
    bonusUnicité: combien de caractères uniques sachant que majuscule=minuscule
    tout les caractères à la suite de deux caractères identiques sont ignorés
    tout les caractères dont le code UTF-16 est augmenté de 1 ou de -1 par rapport au précédent et au deux précédent (exemple: ghi) sont ignorés
    
    Score final:
    Gros bonus sur les deux premières caractères de chaque critère (+7.5% & +2.5%). Puis petit bonus décroissant jusqu'a 28 caractères dans chaque critère (jusqu'a +5%).
    Bonus de 1% par caractère différent, max 10
    Puis résultat final (divisé par 2 si inférieur à 27 sinon) diminué de 20 et multiplié par 2.
  */
  let critere = [0, 0, 0, 0];
  let bonusUnicite = [];
  for (let i = 0; i < motdepasse.length; i++) {
    check = 0;
    if (i<2) {
        check=1;
    } else {
        if (
            (motdepasse[i] != motdepasse[i-1] ||
              motdepasse[i] != motdepasse[i-2]) &&
            (motdepasse[i].charCodeAt(0) + 1 != motdepasse[i - 1].charCodeAt(0) ||
              motdepasse[i].charCodeAt(0) + 2 != motdepasse[i - 2].charCodeAt(0)) &&
            (motdepasse[i].charCodeAt(0) - 1 != motdepasse[i - 1].charCodeAt(0) ||
              motdepasse[i].charCodeAt(0) - 2 != motdepasse[i - 2].charCodeAt(0))
          ) {
            check=1;
          }
    }
    if (check==1){
        console.log(motdepasse[i]);
        //console.log(motdepasse[i]);
        if (motdepasse[i].match(/^[a-z]$/)) {
          //console.log("a-z");
          critere[0]++;
        } else if (motdepasse[i].match(/^[A-Z]$/)) {
          //console.log("A-Z");
          critere[1]++;
        } else if (motdepasse[i].match(/^[0-9]$/)) {
          //console.log("0-9");
          critere[2]++;
        } else {
          //console.log("@?!");
          critere[3]++;
        }
        if (bonusUnicite.length < 10) {
          let ajout = new Boolean(true);
          for (let j = 0; j < bonusUnicite.length; j++) {
            if (bonusUnicite[j].toLowerCase() == motdepasse[i].toLowerCase()) {
              ajout = "false";
            }
          }
          //console.log(ajout, bonus3);
          if (ajout == Boolean(true)) {
            bonusUnicite.push(motdepasse[i]);
            //console.log(">", ajout, bonusUnicite);
          }
        }
      } else {
        console.log("Caractère " + i + " ignoré pour cause de répition.");
      }
    }

  let newprogression = bonusUnicite.length;
  console.log(newprogression);
  for (let i = 0; i < 4; i++) {
    if (critere[i] > 0) {
      if (critere[i] > 1) {
        if (critere[i] > 2) {
          //3+
          newprogression += Math.floor(min(Math.sqrt(critere[i]) + 9, 15));
        } else {
          //2
          newprogression += 10;
        }
      } else {
        //1
        newprogression += 7.5;
      }
    }
  }

  console.log(
    newprogression,
    ">",
    critere[0],
    critere[1],
    critere[2],
    critere[3],
    bonusUnicite.length
  );

  //70-40
  //0>0
  //10>10
  //20>20
  //30>40
  //40>60
  //50>80
  //60>90
  //70>100
if (newprogression<20){
  newprogression = newprogression;
} else {
  if (newprogression < 50) {
  newprogression = newprogression * 2 - 20;
}else {
  newprogression = newprogression + 30;
}
}

/*
  if (newprogression<27){
    newprogression = newprogression / 2;
  } else {
    newprogression = (newprogression-20)*2;
  }*/

  document.getElementById("resultat").style = "width:" + newprogression + "%";


  document.getElementById("resultat").classList.remove("bg-danger");
  document.getElementById("resultat").classList.remove("bg-warning");
  document.getElementById("resultat").classList.remove("bg-success");
  document.getElementById("resultat").classList.remove("bg-primary");
switch (true){
    case newprogression<30:
        document.getElementById("motresultat").innerHTML = "Dangereux";
        document.getElementById("resultat").classList.add("bg-danger");
    break;
    case newprogression<50:
        document.getElementById("motresultat").innerHTML = "Moyen";
        document.getElementById("resultat").classList.add("bg-warning");
    break;
    case newprogression<70:
        document.getElementById("motresultat").innerHTML = "Sécurisé";
    document.getElementById("resultat").classList.add("bg-success");
    break;
    case newprogression<100:
      document.getElementById("motresultat").innerHTML = "Très sécurisé";
  document.getElementById("resultat").classList.add("bg-primary");
    break;
    default:
        document.getElementById("motresultat").innerHTML = "M-M-Master of the password";
    document.getElementById("resultat").classList.add("bg-info");
}


}

function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}
