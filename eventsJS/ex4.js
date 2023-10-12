/*
Question 4

Créer une application qui calcule la monnaie à rendre.

Saisissez le montant du ticket à payer.

Saisissez la somme que le client a donné.

Simulez la remise de la monnaie en affichant le nombre de billet de "10 Euros", "5 Euros" et de pièces de "1 Euro".

Nous partons du principe que les montants sont des entiers.
*/

document.querySelector("button").addEventListener("click", fufu);

function fufu(event) {
  event.preventDefault();
  let prixAPayer = parseInt(document.getElementById("prixAPayerInput").value);
  let combienAPayer = parseInt(document.getElementById("combienAPayerInput").value);
  if (prixAPayer > combienAPayer) {
    document.getElementById("resultat").innerHTML =
      "Veuillez rentrer plus de monnaie.";
  }
  if (prixAPayer == combienAPayer) {
    document.getElementById("resultat").innerHTML =
      "Achat accepté. Merci et à bientôt ^_^";
  }

  if (prixAPayer < combienAPayer) {

    document.getElementById("resultat").innerHTML =
      "Achat accepté. Voici la monnaie:";
    let rendu = combienAPayer - prixAPayer;
    let dixE = Math.floor(rendu / 10);
    let cinqE = Math.floor((rendu - dixE * 10) / 5);
    let unE = Math.floor(rendu - dixE * 10 - cinqE * 5);

    let res = document.getElementById("resultat");
    for (let i=0;i<dixE;i++){
        var img = document.createElement("img");
        img.src = "10e.png";
        img.style.width = "150px";
        res.appendChild(img);
    }
    if (cinqE==1){
        var img = document.createElement("img");
        img.src = "5e.png";
        img.style.width = "150px";
        res.appendChild(img);
    }
    for (let i=0;i<unE;i++){
        var img = document.createElement("img");
        img.src = "1e.png";
        img.style.width = "50px";
        res.appendChild(img);
    }
  }
}
