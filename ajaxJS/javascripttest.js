let tartiflette = new XMLHttpRequest();

tartiflette.open("GET", "book.xml");
tartiflette.send();

tartiflette.addEventListener("readystatechange", compote);
function compote(event) {
  if (this.readyState === 4 && this.status === 200) {
    document.querySelector("div").innerHTML = this.responseText;
  }

  console.log(event.target);
  console.log("==================");
}

/*
tartiflette.onreadystatechange = function () {
    console.log("be", this);
}
*/

document.getElementById("cliquemoi").addEventListener("click", aeteclique);

function aeteclique() {
  let profiterroles = new XMLHttpRequest();

  profiterroles.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.querySelector("#resultat").innerHTML = this.response;
      let data = this.response;

        for (let i=0;i<data.length;i++){
            console.log(data[i].name);
        }
    }
  };

  profiterroles.open("GET", "https://jsonplaceholder.typicode.com/users");
  profiterroles.responseType = "json";
  //profiterroles.responseType = "blob";
  profiterroles.send();
}
