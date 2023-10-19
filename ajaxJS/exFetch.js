console.log("début");
let tabPostUser = [];
let data, data2;
/*
data = fetch("https://jsonplaceholder.typicode.com/posts")
.then(r => r.json())
.then(s => {
data = s;

//extra pour rendre la liste plus intéressante
data.splice(30,12).splice(12,2);
console.log("s", data);
//<==
return data
});*/
/*
data2 = fetch("https://jsonplaceholder.typicode.com/users")
.then(r => r.json())
.then(s => {
  data2 = s;

//extra pour rendre la liste plus intéressante
  let temp = data2[7];
  data2[7] = data2[8];
  data2[8] = temp;
  console.log("s", data2);
//<==
});*/


Promise.allSettled([

  data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(s => {
  data = s;
  
  //extra pour rendre la liste plus intéressante
  data.splice(30,12).splice(12,2);
  console.log("s", data);
  //<==
  }),

  data2 = fetch("https://jsonplaceholder.typicode.com/users")
  .then(r => r.json())
  .then(s => {
    data2 = s;
  
  //extra pour rendre la liste plus intéressante
    let temp = data2[7];
    data2[7] = data2[8];
    data2[8] = temp;
    console.log("s", data2);
  //<==
  }),

])


.then(uselessvariable => {

  console.log("c", data);
  console.log("d", data2);
  let newDivs = [];

  for(const c of data){
    //exclude prototype (last element)
    if (c.id==data.length-1){
      break;
    }

    //console.log("f", data2[c.userId-1]);
    //console.log("f", data2);
    const realc = data[c.id-1];
    for (const d of data2){
      if (realc.userId==d.id){

        
        newDivs[0] = document.createElement("div");
        newDivs[0].id = "id" + c.id;
        newDivs[0].classList.add("card", "m-2");
        newDivs[0].style = "width: 18rem;";
        document
          .getElementById("resultat")
          .appendChild(newDivs[0]);

        newDivs[1] = document.createElement("div");
        newDivs[1].id = "id" + c.id + "'";
        newDivs[1].classList.add("card-body");
        document
          .getElementById("id" + c.id)
          .appendChild(newDivs[1]);

        newDivs[2] = document.createElement("h5");
        newDivs[2].classList.add("card-title");
        newDivs[2].innerHTML = "Card #" + [realc.id];
        

          document
          .getElementById("id" + c.id + "'")
          .appendChild(newDivs[2]);

        newDivs[3] = document.createElement("h6");
        newDivs[3].classList.add("card-subtitle", "mb-2", "text-muted");
        newDivs[3].innerHTML = realc.title;
        document
          .getElementById("id" + c.id + "'")
          .appendChild(newDivs[3]);

          newDivs[4] = document.createElement("p");
          newDivs[4].classList.add("card-text");
          newDivs[4].innerHTML = realc.body.slice(0,50);
          document
            .getElementById("id" + c.id + "'")
            .appendChild(newDivs[4]);

            newDivs[5] = document.createElement("p");
            newDivs[5].classList.add("card-footer", "fst-italic", "text-nowrap", "bg-white");
            newDivs[5].innerHTML = "écrit par " + d.name;
            document
              .getElementById("id" + c.id + "'")
              .appendChild(newDivs[5]);
    
         // console.log(realc, d);
      }
      //console.log("f", d.id);
      //console.log("f", c.userId);
    }
  }



}

  );

  




  console.log("fin");