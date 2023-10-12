/*
Question 1

Les habitants de Zorglub paient l'impôt selon les règles suivantes :

    Les hommes de plus de 20 ans paient l'impôt.

    Les femmes paient l'impôt si elles ont entre 18 et 35 ans.

    Les autres ne paient pas d'impôt.

Le programme demandera donc l'âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l'habitant est imposable ou non.
*/

document.querySelector("button").addEventListener("click", submitform);

function submitform (event) {
    event.preventDefault();
    age = document.getElementById("ageInput1").value;
    sexe = document.getElementById("genreSelect1").value;



    if ((sexe=="Homme" && age >= 20) || (sexe=="Femme" && age >= 18 && age <= 35)){
        document.getElementById("resultat").innerHTML = "Félécitation! Tes impôts vont aider à financer les projets de la ville :)";
    } else {
        document.getElementById("resultat").innerHTML = "Félécitation! Tu n'as aucun impôt à payer :)";
    }


    if (sexe != "Homme" && sexe !="Femme") {
        document.getElementById("genreSelect1").style.borderColor = "red";
        document.getElementById("genreSelect1").style.borderWidth = "2px 10px";
        document.getElementById("resultat").innerHTML = "Veuillez rentrer un sexe valide";
    } else {
        document.getElementById("genreSelect1").style.borderWidth = "0";
    }
    if (age <1 || age > 120){
        document.getElementById("ageInput1").style.borderColor = "red";
        document.getElementById("ageInput1").style.borderWidth = "2px 10px";
        document.getElementById("resultat").innerHTML = "Veuillez rentrer un age valide";
    } else {
        document.getElementById("ageInput1").style.borderWidth = "0";
    }


}
