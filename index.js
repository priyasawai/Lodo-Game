ludogame=()=>{
const play1=Math.floor(Math.random()*6)+1;
console.log(play1);
const playdice1=`dice${play1}.png`;
console.log(playdice1);
document.getElementById("check").setAttribute('src',playdice1);

const play2=Math.floor(Math.random()*6)+1;
const playdice2=`dice${play2}.png`;
document.getElementById("check2").setAttribute('src',playdice2);
if(play1>play2){
  document.querySelector('h1').innerHTML="Player1 Won :)";
}
else if(play1<play2)
{
  document.querySelector('h1').innerHTML="player2 Won :);"
}
else{
   document.querySelector('h1').innerHTML="Draw :)";
} 
}