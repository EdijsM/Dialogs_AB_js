text = "";
var i = 1;
for ( ; i < 5 ; ) {
  text = text + i + "<br>";
  i++;
}

document.getElementById("for_automatic_count_classic").innerHTML = text;






let text4 = "";
for (let i = 1; i < 5 ; i++) {
  text4 = text4 + i + "<br>";
  if ( i == 3 ) {
    break ;
  }
}


document.getElementById("brake_automatic_count_classic").innerHTML = text4;






const valuta = ["btc", "eth", "doge"];

text2 = "";
var i = 1;
while ( i < valuta.length ) {
  text2 = text2 + valuta[i] + "<br>";
  i++;
}

document.getElementById("while_automatic_count_classic").innerHTML = text2;







text5 = "";
var i = 1;
do {
    text5 = text5 + i + "<br>";
 i++

} while ( i < 5 && i == 2 );

document.getElementById("do_while_automatic_count").innerHTML = text5;




//funkcija //

text6 = "for count until " + 5 + ":<br>";
for (let i = 1; i <= 5 ; i++) {
  text6 = text6 + i + "<br>";
 
}

document.getElementById("count1").innerHTML = text6;

text6 = "for count until " +10+ ":<br>";
for (let i = 1; i <= 10 ; i++) {
  text6 = text6 + i + "<br>";
  
}

document.getElementById("count2").innerHTML = text6;

text6 = "for count until " +15+ ":<br>";
for (let i = 1; i <= 15 ; i++) {
  text6 = text6 + i + "<br>";
 
}

document.getElementById("count3").innerHTML = text6;




/**
 * @name counter
 * @description Counting from 1 to 10
 * @param {*} N
 * @param {*} html_el_id_nr
 * 
 * @returns {void} counter
 */


function counter(N,html_el_id_nr) {
text6 = "for count until " + N + ":<br>";
for (let i = 1; i <= N ; i++) {
  text6 = text6 + i + "<br>";
 
}

document.getElementById("count"+html_el_id_nr).innerHTML = text6;
}

counter(20,4);
counter(25,5);




/**
 * @name summator
 * @description Counting a and b
 * @param {*} N
 * @param {*} html_el_id_nr
 * 
 * @returns {void} counter
 */


 function summator (a,b) {
c = a +  b;
return c;
 }
  
function dialogs(){ 
var a = Number(prompt ("ievadiet a"));
    b = Number(prompt ("ievadiet b"));
  document.getElementById("summator1").innerHTML = a + " un " + b + " summa ir " + summator(a,b);
}

  dialogs();

