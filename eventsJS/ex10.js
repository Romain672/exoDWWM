/*
Question 10

Réalisez le jeu du MasterMind en Java.

Le but est de deviner, par déductions successives, la couleur et la position des 4 pions cachés derrière un écran.

Pour gagner, il faut deviner la combinaison secrète en 12 tentatives maximum.

Habituellement, le jeu se joue à deux mais ici nous partons du principe que c'est l'ordinateur qui fixe la combinaison secrète.

L’utilisateur doit donc deviner la combinaison.
*/





//⚫⚪--🔴🔵🟠🟤🟢🟡🟣


//Jamais utilisé de 'double listes' avant. Donc même si j'utiliserais pas la color, ça me force à trouver d'autres fonctions
let listColors = [
  {
    color: "red",
    img: "🔴",
  },
  {
      color: "blue",
      img: "🔵",
  },
  {
      color: "orange",
      img: "🟠",
  },
  {
      color: "brown",
      img: "🟤",
  },
  {
      color: "green",
      img: "🟢",
  },
  {
      color: "yellow",
      img: "🟡",
  },
  {
      color: "purple",
      img: "🟣",
  },
];

const combinaison = [randomcolor(),randomcolor(),randomcolor(),randomcolor()];
for (let i=1;i<5;i++){
  document.querySelector("tbody").querySelectorAll("td")[i].addEventListener("click", changecolor);
}
document.getElementById("valider").addEventListener("click", validation);

function validation (){


  const colorsChosen = [];
  for (i=1;i<5;i++){
    colorsChosen[i-1] = listColors[listColors.map(x => x.img).indexOf(document.querySelector("tbody").querySelectorAll("td")[i+6*totalNewLines].innerHTML)]
  }
  let flag=0;
  for (i=0;i<4;i++){
   if(colorsChosen[i]==undefined){
    flag=1;
    break;
   }
  }
  if (flag==1){
    console.log("Combinaison pas bonne.");
    return;
  }

  let blackWhite = comparaison(colorsChosen);


  for (let i=0;i<blackWhite[0];i++){
    document.querySelector("tbody").querySelectorAll("td")[0+6*totalNewLines].innerHTML += "⚫";
  }
  for (let i=0;i<blackWhite[1];i++){
    document.querySelector("tbody").querySelectorAll("td")[0+6*totalNewLines].innerHTML += "⚪";
  }


  createnewline();

  

}


 let totalNewLines = 0;
 let newDivs = [];
 let currentDivs = [];
function createnewline (){
  if (totalNewLines==11){
    youlose();
  }

    newDivs[0+7*totalNewLines] = document.createElement("tr");
    currentDivs[0+7*totalNewLines] = document.getElementById("div1");
    document.querySelector("tbody").insertBefore(newDivs[0+7*totalNewLines], currentDivs[0+7*totalNewLines]);

    newDivs[1+7*totalNewLines] = document.createElement("td");
    currentDivs[1+7*totalNewLines] = document.getElementById("div2");
    var newContent = document.createTextNode(2 + totalNewLines);
    newDivs[1+7*totalNewLines].appendChild(newContent);
    document.querySelectorAll("tr")[2+totalNewLines].insertBefore(newDivs[1+7*totalNewLines], currentDivs[1+7*totalNewLines]);

  for (let i=2;i<7;i++){
    newDivs[i+7*totalNewLines] = document.createElement("td");
    currentDivs[i+7*totalNewLines] = document.getElementById("div2");
    if (i != 2){
      var newContent = document.createTextNode("⚪");
      newDivs[i+7*totalNewLines].appendChild(newContent);
    }
    document.querySelectorAll("tr")[2+totalNewLines].insertBefore(newDivs[i+7*totalNewLines], currentDivs[i+7*totalNewLines]);
  }



  totalNewLines++;

for (let i=1;i<5;i++){
  document.querySelector("tbody").querySelectorAll("td")[i+6*totalNewLines-6].removeEventListener("click", changecolor);
  document.querySelector("tbody").querySelectorAll("td")[i+6*totalNewLines].addEventListener("click", changecolor);
}
}


function comparaison (colorsChosen) {
  let skipBlack = [];

  //black dots
  let blackdot=0;
  for (let i=0;i<4;i++){
    if (colorsChosen[i]==combinaison[i]){
      skipBlack.push([i,i]);
      blackdot = blackdot *1 +1;
    }
  }
  //white dots
  let whitedot=0;
  for (let i=0;i<4;i++){
    for (let j=0;j<4;j++){
      let skip=0;
      for (let k=0;k<skipBlack.length;k++){
        if (i==skipBlack[k][0] || j==skipBlack[k][1]){
          skip=1;
        }
      }
      if (skip==0 && colorsChosen[i]==combinaison[j]){
        skipBlack.push([i,j]);
        whitedot = whitedot *1 +1;
      }
    }
  }

  if (blackdot==4){
    youwin();
  }

  return [blackdot, whitedot];


}
function youwin (){
  document.getElementById("resultat").innerHTML = "You win! :)";
  DontWorryConsoleItsFinished
}
function youlose (){
  document.getElementById("resultat").innerHTML = "You lose :( The combinaison was" + combinaison[0].img + combinaison[1].img + combinaison[2].img + combinaison[3].img;
  DontWorryConsoleItsFinished
}


function changecolor(event){
  let actualColor = event.target.innerHTML;
  const idColor = listColors.map(x => x.img).indexOf(actualColor);
  let newColor;
  if (listColors.length == idColor+1){
     newColor= listColors[0];
  } else {
    newColor= listColors[idColor+1];
  }
  const numberOfDotClicked = event.target.cellIndex-2;
  document.querySelector("tbody").querySelectorAll("td")[numberOfDotClicked+1+6*totalNewLines].innerHTML = newColor.img;
}




function randomcolor(){
  return listColors[Math.floor(Math.random()*7)];
}
