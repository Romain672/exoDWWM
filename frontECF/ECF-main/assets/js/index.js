var films = [];
ajouterFilm({
  title: "Deadpool",
  years: 2016,
  authors: "Tim Miller",
});
ajouterFilm({
  title: "Spiderman",
  years: 2002,
  authors: "Sam Raimi",
});
ajouterFilm({
  title: "Scream",
  years: 1996,
  authors: "Wes Craven",
});
ajouterFilm({
  title: "It: chapter 1",
  years: 2019,
  authors: "Andy Muschietti",
});

document.querySelector("aside div").addEventListener("click", function () {
  document.querySelector("aside form").classList.remove("collapse");
  document.querySelector("aside div").classList.remove("d-inline");
  document.querySelector("aside div").classList.add("collapse");;
});

/*document
  .querySelectorAll("header button")[0]
  .addEventListener("click", ouvreIndex);*/
document
  .querySelectorAll("header button")[1]
  .addEventListener("click", ouvreRechercher);

function ouvreRechercher() {
  let path = window.location.pathname;
  path = path.substring(path.length-5,path.length-6);
  console.log(path);
  if (path=="x" || path=="r"){
    path="";
  }
  window.open("rechercher" + path + ".html", "self");
}
function ouvreIndex() {
  let path = window.location.pathname;
  path = path.substring(path.length-5,path.length-6);
  console.log(path);
  if (path=="x" || path=="r"){
    path="";
  }
  window.open("index" + path + ".html", "self");
}

let maindivdivbutton = document.querySelectorAll("main div div button");
for (let i = 0; i < maindivdivbutton.length; i++) {
  maindivdivbutton[i].addEventListener("click", supprimerFilm);
}

afficherFilms();

document
  .querySelector("aside form button")
  .addEventListener("click", validerFormulaire);

function validerFormulaire(event) {
  event.preventDefault();
  let estcequecestbon = 0;
  let messagefinal = "";

  //Majuscule sur le titre
  inputTitre.value = inputTitre.value[0]
    .toUpperCase()
    .concat(inputTitre.value.toLowerCase().substring(1));
  //Majuscule sur chaque nom de l'auteur
  let splitEspace = inputAuteur.value.split(" ");
  for (let i = 0; i < splitEspace.length; i++) {
    splitEspace[i] = splitEspace[i][0]
      .toUpperCase()
      .concat(splitEspace[i].toLowerCase().substring(1));
  }
  splitEspace = splitEspace.join(" ");
  inputAuteur.value = splitEspace;

  //Vérification si le fim est déjà présent
  for (let i = 0; i < films.length; i++) {
    if (
      films[i].title == inputTitre.value &&
      films[i].years == inputAnnee.value &&
      films[i].authors == inputAuteur.value
    ) {
      estcequecestbon = 1;
      messagefinal += "</br>Film déjà présent.";
    }
  }

  //Vérification du formulaire
  bordures = document.querySelectorAll("form div div div");
  if (inputTitre.value.length < 2) {
    estcequecestbon = 1;
    bordures[0].setAttribute("style", "border: solid red 5px");
    messagefinal += "</br>Le titre doit avoir au moins 2 caractères.";
  } else {
    bordures[0].setAttribute("style", "border: solid black 5px");
  }
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
  if (inputAuteur.value.length < 5) {
    estcequecestbon = 1;
    bordures[2].setAttribute("style", "border: solid red 5px");
    messagefinal += "</br>Le réalisateur doit avoir au moins 5 caractères.";
  } else {
    bordures[2].setAttribute("style", "border: solid black 5px");
  }
  if (estcequecestbon == 0) {
    //Formulaire bon
    inputAnnee.value = parseInt(Math.floor(inputAnnee.value)); //inutile
    let retourne = {};
    retourne.title = inputTitre.value;
    retourne.years = inputAnnee.value;
    retourne.authors = inputAuteur.value;
    ajouterFilm(retourne);
    messagefinal = "Film ajouté avec succès!";
  } else {
    //Formulaire pas bon
    messagefinal = "Film non ajouté parce que:" + messagefinal;
  }

  //Afficher succès/rejet pendant 3 secondes
  document.getElementById("message").innerHTML = messagefinal;
  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
  }, 3000);
}

function afficherFilms() {
  let div = document.querySelectorAll("main>div>div");
  for (let i = 0; i < films.length; i++) {
    let element = div[i + 1].children;
    element[0].innerHTML = films[i].title;
    element[1].innerHTML = films[i].years;
    element[2].innerHTML = films[i].authors;
    //bordures =>
    element[0].classList.remove("border-bottom");
    element[1].classList.remove("border-bottom");
    element[2].classList.remove("border-bottom");
    element[3].classList.remove("border-bottom");
    //bordures <=
  }
    //bordures =>
  div[films.length].children[0].classList.add("border-bottom");
  div[films.length].children[1].classList.add("border-bottom");
  div[films.length].children[2].classList.add("border-bottom");
  div[films.length].children[3].classList.add("border-bottom");
    //bordures <=
}

function ajouterFilm(film) {
  /*
    <div class="row">
        <div class="col-1"></div>
        <div class="col-3 bg-secondary">Deadpool</div>
        <div class="col-3 bg-secondary">2016</div>
        <div class="col-2 bg-secondary">Tim Miler</div>
        <btn class="col-2 btn btn-danger">Supprimer</btn>
        <div class="col-1"></div>
    </div>
    */
   /*
            <div class="row justify-content-center">
                <div class="col-2 bg-secondary">Titre</div>
                <div class="col-2 bg-secondary">Année</div>
                <div class="col-2 bg-success">Réalisateur</div>
                <div class="col-2 bg-secondary"><!--Vide--></div>
            </div>
        */
  const parent = document.querySelector("main div");
  const newrow = document.createElement("div");
  newrow.setAttribute("class", "row justify-content-center");
  parent.append(newrow);

  const div1 = document.createElement("div");
  div1.setAttribute("class", "w-25 col-2 bg-secondary border-start");
  film.title = film.title[0]
    .toUpperCase()
    .concat(film.title.toLowerCase().substring(1));
  newrow.append(div1);

  const div2 = document.createElement("div");
  div2.setAttribute("class", "w-25 col-2 bg-secondary");
  film.years = parseInt(Math.floor(film.years)); //inutile
  newrow.append(div2);

  const div3 = document.createElement("div");
  div3.setAttribute("class", "w-25 col-2 bg-secondary");
  let splitEspace = film.authors.split(" ");
  for (let i = 0; i < splitEspace.length; i++) {
    splitEspace[i] = splitEspace[i][0]
      .toUpperCase()
      .concat(splitEspace[i].toLowerCase().substring(1));
  }
  splitEspace = splitEspace.join(" ");
  film.authors = splitEspace;
  newrow.append(div3);

  const div4 = document.createElement("div");
  div4.setAttribute("class", "w-25 col-2 bg-secondary border-end");
  newrow.append(div4);

  const div4btn = document.createElement("button");
  div4btn.setAttribute("class", " bg-danger m-2");
  div4btn.innerHTML = "Supprimer";
  div4.append(div4btn);

  films.push(film);
  afficherFilms();
}

let supprimerFilmActuel = -1;
function supprimerFilm(event) {
  let query = document.querySelectorAll("main div div button");
  let film;
  for (let i = 0; i < query.length; i++) {
    if (event.target == query[i]) {
      film = films[i];
    }
  }

  let indexasupprimer = -1;
  for (let i = 0; i < films.length; i++) {
    if (
      films[i].title == film.title &&
      films[i].years == film.years &&
      films[i].authors == film.authors
    ) {
      indexasupprimer = i;
      break;
    }
  }

  if (indexasupprimer == -1) {
    //inutile
    document.getElementById("message").innerHTML =
      "Erreur: demande de suppression du film " +
      films[indexasupprimer].title +
      films[indexasupprimer].years +
      films[indexasupprimer].authors +
      " mais il n'existe pas (n'est pas censé arriver).";
  }



  document.getElementById("messageConfirmationSuppression").innerHTML =
    "Êtes vous sûr de vouloir supprimer le film " + film.title + "?";
  buttons = document.querySelectorAll("#confirmationSuppression button");
  document.getElementById("messageConfirmationSuppression").classList.remove("d-none");
  buttons[0].classList.remove("d-none");
  buttons[1].classList.remove("d-none");
  supprimerFilmActuel = indexasupprimer;
}
document
  .querySelectorAll("#confirmationSuppression button")[0]
  .addEventListener("click", removeFilmOui);
document
  .querySelectorAll("#confirmationSuppression button")[1]
  .addEventListener("click", removeFilmNon);

function removeFilmOui() {
  if (supprimerFilmActuel == -1) {
    //inutile
    return;
  }
  films.splice(supprimerFilmActuel, 1);
  document.querySelectorAll("main>div>div")[films.length + 1].remove();
  afficherFilms();
  removeFilmNon();
}

function removeFilmNon() {
  buttons[0].classList.add("d-none");
  buttons[1].classList.add("d-none");
  document.getElementById("messageConfirmationSuppression").innerHTML = "";
  supprimerFilmActuel = -1; //inutile
}

document
  .querySelector("#filtrer select")
  .addEventListener("change", triTableau);

/**
 * Tri un tableau en fonction de la valeur de event.target.value égal à 'nom' ou 'date'
 * @function tri
 * @param {event} event - évènement d'un bouton Supprimer cliqué
 */
function triTableau(event) {
  let triPar = event.target.value;
  let newlist = [];

  if (triPar == "nom") {
    if (films.length > 0) {
      newlist.push(films[0]);
      if (films.length > 1) {
        let min = 0;
        let mid = Math.floor(newlist.length / 2);
        let max = newlist.length;

        for (let i = 1; i < films.length; i++) {
          min = 0;
          max = newlist.length;
          while (min != max) {
            mid = Math.floor((max - min) / 2 + min);
            if (films[i].title > newlist[mid].title) {
              if (min == mid) {
                //cas min=x, mid=x, max=x+1
                mid++;
              }
              min = mid;
            } else {
              max = mid;
            }
          }
          newlist.splice(max, 0, films[i]);
        }
      }
    }
  }

  if (triPar == "date") {
    if (films.length > 0) {
      newlist.push(films[0]);
      if (films.length > 1) {
        let min = 0;
        let mid = Math.floor(newlist.length / 2);
        let max = newlist.length;

        for (let i = 1; i < films.length; i++) {
          min = 0;
          max = newlist.length;
          while (min != max) {
            mid = Math.floor((max - min) / 2 + min);
            if (films[i].years > newlist[mid].years) {
              if (min == mid) {
                //cas min=x, mid=x, max=x+1
                mid++;
              }
              min = mid;
            } else {
              max = mid;
            }
          }
          let retourne = {};
          retourne.title = films[i].title;
          retourne.years = films[i].years;
          retourne.authors = films[i].authors;
          newlist.splice(max, 0, retourne);
        }
      }
    }
    newlist.reverse();
  }
  films = newlist;
  afficherFilms();
}
