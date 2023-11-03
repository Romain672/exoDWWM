//bibliothèque

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,});



//http://www.omdbapi.com/?apikey=8c7bf108&s=Star+wars

document
  .querySelectorAll("header button")[0]
  .addEventListener("click", ouvreIndex);
/*document
  .querySelectorAll("header button")[1]
  .addEventListener("click", ouvreRechercher);*/

function ouvreRechercher() {
  window.open("rechercher2.html", "self");
}
function ouvreIndex() {
  window.open("index2.html", "self");
}

document
  .querySelector("form div div button")
  .addEventListener("click", validerFormulaire);

let pageactuelle = 1;
function validerFormulaire(event) {
  event.preventDefault();
  let estcequecestbon = 0;
  let messagefinal = "";

  bordures = document.querySelectorAll("form div div div input");

  //Vérification du formulaire
  if (inputTitre.value == "") {
    messagefinal = "</br>Titre vide. Veuillez rentrer quelque chose.";
    bordures[0].setAttribute("style", "border: solid red 5px");
    estcequecestbon = 1;
  }

  if (inputTitre.value != "") {
    //Majuscule sur le titre
    inputTitre.value = inputTitre.value[0]
      .toUpperCase()
      .concat(inputTitre.value.toLowerCase().substring(1));

    if (inputTitre.value.length < 2) {
      estcequecestbon = 1;
      bordures[0].setAttribute("style", "border: solid red 5px");
      messagefinal += "</br>Le titre doit avoir au moins 2 caractères.";
    } else {
      bordures[0].setAttribute("style", "border: solid black 5px");
    }
  }
  if (inputAnnee.value != "") {
    const anneeActuelle = new Date().getFullYear();
    bordures[1].setAttribute("style", "border: solid black 5px");
    if (inputAnnee.value < 1900 || inputAnnee.value > anneeActuelle) {
      estcequecestbon = 1;
      bordures[1].setAttribute("style", "border: solid red 5px");
      messagefinal +=
        "</br>L'année doit être comprise entre 1900 et " + anneeActuelle + ".";
    }
    if (Math.floor(inputAnnee.value) != inputAnnee.value) {
      estcequecestbon = 1;
      bordures[1].setAttribute("style", "border: solid red 5px");
      messagefinal += "</br>L'année doit être un nombre entier.";
    }
  }
  if (estcequecestbon == 0) {
    //Formulaire bon
    console.log("Recherche réussi! Yay!");
    demarrerFetch();
  } else {
    //Formulaire pas bon
    messagefinal = "Recherche échoué parce que:" + messagefinal;
  }

  //Afficher succès/rejet pendant 3 secondes
  document.getElementById("message").innerHTML = messagefinal;
  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
  }, 3000);
}
function demarrerFetch() {
  let data;
  let chaineAFetch = "http://www.omdbapi.com/?apikey=8c7bf108";
  if (inputTitre.value != "") {
    chaineAFetch += "&s=" + inputTitre.value;
  }
  if (inputAnnee.value != "") {
    chaineAFetch += "&y=" + inputAnnee.value;
  }
  if (inputType.value != "aucun") {
    chaineAFetch += "&type=" + inputType.value;
  }

  chaineAFetch += "&page=" + pageactuelle;
  console.log(chaineAFetch);

  fetch(chaineAFetch)
    .then((r) => r.json())
    .then((s) => {
      data = s.Search;
      console.log(s.totalResults);

      if (pageactuelle == 1 || s.totalResults < 11 || s.Response == "False") {
        buttons[0].classList.add("d-none");
      } else {
        buttons[0].classList.remove("d-none");
      }

      if (pageactuelle >= s.totalResults / 10 || s.Response == "False") {
        buttons[1].classList.add("d-none");
      } else {
        buttons[1].classList.remove("d-none");
      }


      if (s.Response == "False") {
        document.getElementById("message").innerHTML =
          "Aucun résultat trouvé :(";
        setTimeout(() => {
          document.getElementById("message").innerHTML = "";
        }, 3000);
        return;
      }


      const parent = document.querySelector("main>div>div");
      parent.textContent = "";
      
      for (let i = 0; i < data.length; i++) {
        /*
            <div class="swiper-slide bg-danger swiper-slide-active">Slide 1</div>
            <div class="swiper-slide bg-info swiper-slide-next">Slide 2</div>
            <div class="swiper-slide bg-warning">Slide 3</div>
            <div class="swiper-slide bg-danger">Slide 4</div>
            <div class="swiper-slide bg-warning">Slide 5</div>
            <div class="swiper-slide bg-info">Slide 6</div>
            <div class="swiper-slide bg-danger">Slide 7</div>
            <div class="swiper-slide bg-info">Slide 8</div>
            <div class="swiper-slide bg-warning">Slide 9</div>
            <div class="swiper-slide bg-info">Slide 10</div>
        */
       /*
        const parent= document.createElement("div");
        parent.classList.add("swiper-slide");
        parent.classList.add("bg-danger");
        parent.textContent = "Slide" + i;
        console.log(document.querySelector("main>div>div"));
        document.querySelector("main>div>div").append(parent);*/

        //const parent = document.querySelector("main div");
        const newrow = document.createElement("div");
        newrow.setAttribute("class", "bg-info text-center swiper-slide bg-info");
        parent.append(newrow);

        const div1 = document.createElement("img");
        div1.setAttribute("src", data[i].Poster);
        if (div1.src.endsWith("N/A")) {
          console.log("image non chargé");
          div1.setAttribute("src", "https://placehold.co/150x200");
          div1.setAttribute(
            "alt",
            "Placeholder (poster non trouvé dans la base de donnée)"
          );
        }
        div1.setAttribute("alt", "Poster du film " + data[i].Title);
        div1.setAttribute("style", "width:150px;height:200px");
        newrow.append(div1);

        const div2 = document.createElement("p");
        div2.textContent = data[i].Title;
        newrow.append(div2);

        const div3 = document.createElement("p");
        div3.textContent = data[i].Year;
        newrow.append(div3);
      }
    });
}

const buttons = document.querySelectorAll("main button");
buttons[0].addEventListener("click", pagePrecedente);
buttons[1].addEventListener("click", pageSuivante);

function pagePrecedente() {
  pageactuelle--;
  demarrerFetch();
}

function pageSuivante() {
  pageactuelle++;
  demarrerFetch();
}
