/*
Question 2

Un magasin de reprographie facture :

    0,10 € les dix premières photocopies.

    0,09 € les vingt suivantes.

    Et 0,08 € au-delà.

Écrivez un programme en JavaScript  qui demande à l'utilisateur le nombre de photocopies qu'il souhaite effectuer et qui affiche par la suite la facture correspondante.
*/

document.getElementById("nbrPhotocopiesInput1").addEventListener("change", fufu);
function fufu() {
    const nbrphotocopies = document.getElementById("nbrPhotocopiesInput1").value;
    let prix = 0;
    if (nbrphotocopies<=10) {
        prix = nbrphotocopies*0.1;
    } else {
        if (nbrphotocopies<=30) {
            prix = nbrphotocopies * 0.09 + 0.1;
        } else {
            prix = nbrphotocopies * 0.08 + 0.4;
        }
    }
    document.getElementById("prix").innerHTML = prix.toFixed(2);

}

