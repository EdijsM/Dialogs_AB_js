

/**
 * @name summator
 * @description Counting a and b
 * @param {*} N
 * @param {*} html_el_id_nr
 * 
 * @returns {void} counter
 */


 /* function summator (a,b) {
c = (1/a);
d= b/c;
return d.toFixed(2);
 }
  
function dialogs(){ 
var a = Number(prompt ("Cik tev ir BTC ?"));
    b = Number(prompt ("Kāda ir BTC cena ?"));
  document.getElementById("summator1").innerHTML = a + " un " + b + " summa ir " + summator(a,b);
}

  dialogs();

*/

text9 = prompt("Ievadi tekstu un es pateikshu cik burti vai vārdi");
var burtu_skaititajs_teikuma = 0;
var burtu_skaititajs = 0;
var derigo_vardu_skaits = 0;
N = 2;

function aprekins()
for (let x of text9) {

burtu_skaititajs_teikuma++;
 if ( x == " ") { console.log(x+ " Tā ir atstarpe");
 console.log("iepriekšējā vārdā bija " + burtu_skaititajs + " burti")
 if (burtu_skaititajs >= N){
  console.log("Vēl vairāk, iepriejkšējā vāŗda bija " + N + " simboli vai vairāk ");
  derigo_vardu_skaits++;
 }
burtu_skaititajs = 0;


 } else {
  burtu_skaititajs++;
  console.log(x + " tas ir " + burtu_skaititajs +  ". simbols vārdā");

if (burtu_skaititajs_teikuma == text9.length ) {
  console.log("iepriekšējā teikumā bija " + burtu_skaititajs_teikuma + " burti")
  if (burtu_skaititajs >= N){
    console.log("Vēl vairāk, iepriejkšējā vāŗda bija " + N + " simboli vai vairāk ");
    derigo_vardu_skaits++;
  }
  burtu_skaititajs = 0;
  console.log(" un Vēl vairāk šīs bija pēdējais vārds teikumā ")
}
}
}
document.getElementById("count5").innerHTML = "Tev ir " + derigo_vardu_skaits + ". vārdi, kuros ir " + burtu_skaititajs_teikuma + ". burti." ;




 /*

  function dialogs(){ 
  var a = Number(prompt ("Cik tev ir BTC ?"));
      b = Number(prompt ("Kāda ir BTC cena ?"));
    document.getElementById("summator1").innerHTML = a + " un " + b + " summa ir " + summator(a,b);
  }
  
    dialogs();




   vertikāli izvieto tekstu 
const valuta = ["btc", "eth", "doge"];

let text2 = "";
for (i=0 ; i < valuta.length ; i++ ) {
  text2 += valuta[i] + "<br>";
2}

document.getElementById("crypto").innerHTML = text2;

//**  vertikāli izvieto tekstu */
let language = "HODL vai DCA";1

let text = "";
for (let x of language) {
text += x + "<br>";
}

document.getElementById("crypto_vert").innerHTML = text;
document.getElementById("crypto_vert1").innerHTML = language[1];
