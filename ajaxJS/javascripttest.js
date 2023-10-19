console.log("debut");

function faireQqc() {
  return new Promise(aaaah, bbbbh);
}

function aaaah (successCallback, failureCallback) {
  return new Error;
  console.log("Aaaah");
  // réussir une fois sur deux
  if (Math.random() > 0.5) {
    successCallback("ar");
  } else {
    failureCallback("ae");
  }
}

function bbbbh (successCallback, failureCallback) {
console.log("Bbbbh");
// réussir une fois sur deux
if (Math.random() > 0.5) {
  successCallback("br");
} else {
  failureCallback("be");
}
}

function successCallback (text){
  console.log(text + "|yay");
}
function failureCallback (text){
  console.log(text + "|youps");
}

const promise = faireQqc();
promise.then(successCallback, failureCallback);


console.log("fin");
/*console.log("debut");


const apres = new Promise ((tartiflette, cornichon) => {
  tartiflette(5);
  cornichon(-5);
  console.log("coucou5");
})

const apres2 = new Promise (coucou);

function coucou (a, b)  {
  a(12);
  b(-12);
  console.log("coucou12");
}

//const myerror3 = Promise.reject(new Error("raté")).then(tartiflette, cornichon);
console.log("V");
//myerror3.then(f1, f2);

function f1 () {
  console.log("f1");
}
function f2 () {
  console.log("f2");
}


apres2.then(apres2then);
function apres2then () {
  console.log("apres2then");
}


apres.then((n) => {
  console.log(n);
})
apres2.then((n) => {
  console.log(n);
})
Promise.reject((x) => {
  console.log(x);
})

console.log("fin");

*/




/*let tartiflette = new XMLHttpRequest();

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
*//*
tartiflette.onreadystatechange = function () {
    console.log("be", this);
}
*//*

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
*/