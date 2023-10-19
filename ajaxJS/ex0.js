document.getElementById("start").addEventListener("click", onclick);
//window.addEventListener("load", onclick);

function onclick(event) {
  let xml = new XMLHttpRequest();

  xml.addEventListener("readystatechange", dostuff);
  xml.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xml.responseType = "json";
  xml.send();

  function dostuff(event) {
    //console.log(event.target);


    if (this.readyState === 4) {
      if (this.status === 200) {
        document.getElementById("start").removeEventListener("click", onclick);
        
        let data = this.response;

        let newDivs = [];
        for (let i = 0; i < data.length; i++) {

          newDivs[0] = document.createElement("div");
          newDivs[0].id = "id" + i;
          newDivs[0].classList.add("card", "m-2");
          newDivs[0].style = "width: 18rem;";
          document
            .getElementById("resultat")
            .appendChild(newDivs[0]);

          newDivs[1] = document.createElement("div");
          newDivs[1].id = "id" + i + "'";
          newDivs[1].classList.add("card-body");
          document
            .getElementById("id" + i)
            .appendChild(newDivs[1]);

          newDivs[2] = document.createElement("h5");
          newDivs[2].classList.add("card-title");
          newDivs[2].innerHTML = "Card #" + data[i].id;
          document
            .getElementById("id" + i + "'")
            .appendChild(newDivs[2]);

          newDivs[3] = document.createElement("h6");
          newDivs[3].classList.add("card-subtitle", "mb-2", "text-muted");
          newDivs[3].innerHTML = data[i].title;
          document
            .getElementById("id" + i + "'")
            .appendChild(newDivs[3]);

          newDivs[4] = document.createElement("p");
          newDivs[4].classList.add("card-text");
          newDivs[4].innerHTML = data[i].body.slice(0,50);
          document
            .getElementById("id" + i + "'")
            .appendChild(newDivs[4]);
        }
      } else {
        console.log("erreur: fichier non existant");
      }
    }
  }
}
