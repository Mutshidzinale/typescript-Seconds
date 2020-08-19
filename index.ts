// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

  let seconds=0;

function Convert(Hours, Minutes){
 let HoursinSeconds= 3600* Hours;
let minutesInSeconds = 60* Minutes;
 return seconds= HoursinSeconds + minutesInSeconds ;
} 
 console.log(Convert(1,60),"Seconds");
 