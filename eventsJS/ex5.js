/*
Question 5

Écrire un programme en JavaScript qui demande à un utilisateur de saisir une adresse email via un formulaire.

exemple : monadresse@mail.com

Votre programme doit déterminer si l'adresse fournit par l'utilisateur est valide ou non.

Pour ce faire analysez la chaîne de caractère saisie et trouver si il y a bien la présence d'un "@" et d'un "."

Assurez-vous que le point soit bien présent derrière l'arrobase.

Trouvez le moyen de vérifier l'email sans bouton pour votre formulaire.

Attention : N'utilisez pas le type 'email' dans l'input de votre champ de saisi.
*/


document.querySelector("button").addEventListener("click", verifieremail);

function verifieremail (event) {
    event.preventDefault();
    email = document.getElementById("emailInput").value;


    const pattern = /[a-zA-Z0–9+_.-]+@[a-zA-Z0–9.-]+.[a-zA-Z0–9.-]+/;
    const str = email;
    if (pattern.test(str)) {
      document.getElementById("resultat").innerHTML = "email valide";
    } else {
      document.getElementById("resultat").innerHTML = "email non valide";
    }
        

}