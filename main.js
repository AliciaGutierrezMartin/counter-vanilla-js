//  inicializa el contador
let cont = 0;

//botones
let value = document.querySelector("#value");
let botonDecrease = document.querySelector(".decrease");
let botonIncrease = document.querySelector(".increase");
let botonReset = document.querySelector(".reset");

botonDecrease.addEventListener("click", function (){
  cont--;
  value.innerHTML=cont;
});

botonIncrease.addEventListener("click", function (){
  cont++;
  value.innerHTML=cont;
});

botonReset.addEventListener("click", function (){
  cont=0;
  value.innerHTML=cont;
});
   


