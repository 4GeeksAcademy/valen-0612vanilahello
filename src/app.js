import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronombres =['mi','tu','su' ]

  let adjetivos=[ 'brillante','pequeño','veloz']

  let sustativos=[ 'dragon','lobo',' mapache']

let lista = document.getElementById('combinaciones')

  let combinacionesHTML = "";



  for( let pronombre of pronombres){

  for( let adjetivo of adjetivos){
  
  for ( let sustantivo of sustativos ){

   let combinacion = `${pronombre} ${adjetivo} ${sustantivo}.com`;

   combinacionesHTML += `<li class="list-group-item">${combinacion}</li>`;
   console.log(combinacion)


   lista.innerHTML = combinacionesHTML;
  
  
 }
 }
 }
};


