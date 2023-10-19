document.getElementById("start").addEventListener("click", onclick);

function onclick(event) {
  let xml = new XMLHttpRequest();

  xml.addEventListener("readystatechange", dostuff);
  xml.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xml.responseType = "json";
  xml.send();

  function dostuff(event) {
    console.log(event.target);


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
          newDivs[0] = document.createElement("div");
          newDivs[0].id = "id" + i;
          newDivs[0].classList.add("card", "m-2");
          newDivs[0].style = "width: 18rem;";
          document
            .getElementById("resultat")
            .appendChild(newDivs[0]);

          //<div id="idX'" class="card-body">
          newDivs[1] = document.createElement("div");
          newDivs[1].id = "id" + i + "'";
          newDivs[1].classList.add("card-body");
          document
            .getElementById("id" + i)
            .appendChild(newDivs[1]);

          //<h5 class="card-title">Card title</h5>
          newDivs[2] = document.createElement("h5");
          newDivs[2].classList.add("card-title");
          newDivs[2].innerHTML = "Card #" + data[i].id;
          document
            .getElementById("id" + i + "'")
            .appendChild(newDivs[2]);

          //<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          newDivs[3] = document.createElement("h6");
          newDivs[3].classList.add("card-subtitle", "mb-2", "text-muted");
          newDivs[3].innerHTML = data[i].title;
          document
            .getElementById("id" + i + "'")
            .appendChild(newDivs[3]);

          //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          newDivs[4] = document.createElement("p");
          newDivs[4].classList.add("card-text");
          console.log(data[i].body);
          newDivs[4].innerHTML = data[i].body.slice(0,49);
          document
            .getElementById("id" + i + "'")
            .appendChild(newDivs[4]);

        /*
          //<a href="#" class="card-link">Card link</a>
          newDivs[5] = document.createElement("a");
          newDivs[5].href = "#";
          newDivs[5].classList.add("card-link");
          newDivs[5].innerHTML = "Card link";
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[5], currentDivs[i + 5]);

          //<a href="#" class="card-link">Another link</a>
          newDivs[6] = document.createElement("a");
          newDivs[6].href = "#";
          newDivs[6].classList.add("card-link");
          newDivs[6].innerHTML = "Another link";
          document
            .getElementById("id" + i + "'")
            .insertBefore(newDivs[6], currentDivs[i + 6]);*/
        }
      } else {
        console.log("erreur: fichier non existant");
      }
    }
  }
}
