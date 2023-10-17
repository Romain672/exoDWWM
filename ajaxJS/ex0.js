document.getElementById("start").addEventListener("click", onclick);

function onclick(event) {
  let xml = new XMLHttpRequest();

  xml.addEventListener("readystatechange", dostuff);
  xml.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xml.responseType = "json";
  xml.send();

  function dostuff() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        document.getElementById("start").removeEventListener("click", onclick);
        
        let data = this.response;

        let newDivs = [];
        let currentDivs = [];
        for (let i = 0; i < data.length; i++) {
console.log(data[i]);
          /*
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
        */

          //<div id="idX" class="card" style="width: 18rem;"></div>
          newDivs[i*7] = document.createElement("div");
          newDivs[i*7].id = "id" + i;
          newDivs[i*7].classList.add("card", "m-2");
          newDivs[i*7].style = "width: 18rem;";
          document
            .getElementById("resultat")
            .insertBefore(newDivs[i*7], currentDivs[i]);

          //<div id="idX'" class="card-body">
          newDivs[i*7 + 1] = document.createElement("div");
          newDivs[i*7 + 1].id = "id" + i + "'";
          newDivs[i*7 + 1].classList.add("card-body");
          document
            .getElementById("id" + i)
            .insertBefore(newDivs[i*7 + 1], currentDivs[i + 1]);

          //<h5 class="card-title">Card title</h5>
          newDivs[i*7 + 2] = document.createElement("h5");
          newDivs[i*7 + 2].classList.add("card-title");
          newDivs[i*7 + 2].innerHTML = "Card #" + data[i].id;
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[i*7 + 2], currentDivs[i + 2]);

          //<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          newDivs[i*7 + 3] = document.createElement("h6");
          newDivs[i*7 + 3].classList.add("card-subtitle", "mb-2", "text-muted");
          newDivs[i*7 + 3].innerHTML = data[i].title;
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[i*7 + 3], currentDivs[i + 3]);

          //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          newDivs[i*7 + 4] = document.createElement("p");
          newDivs[i*7 + 4].classList.add("card-text");
          newDivs[i*7 + 4].innerHTML = data[i].body;
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[i*7 + 4], currentDivs[i + 4]);

        /*
          //<a href="#" class="card-link">Card link</a>
          newDivs[i*7 + 5] = document.createElement("a");
          newDivs[i*7 + 5].href = "#";
          newDivs[i*7 + 5].classList.add("card-link");
          newDivs[i*7 + 5].innerHTML = "Card link";
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[i*7 + 5], currentDivs[i + 5]);

          //<a href="#" class="card-link">Another link</a>
          newDivs[i*7 + 6] = document.createElement("a");
          newDivs[i*7 + 6].href = "#";
          newDivs[i*7 + 6].classList.add("card-link");
          newDivs[i*7 + 6].innerHTML = "Another link";
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[i*7 + 6], currentDivs[i + 6]);*/
        }
      } else {
        console.log("erreur: fichier non existant");
      }
    }
  }
}
