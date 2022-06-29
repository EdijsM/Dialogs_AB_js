console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

const valuta = ["btc", "eth", "doge"];

let text = "";
for (let i = 0; i < valuta.length; i++) {
  text = text + valuta[i] + "<br>";
}
// for ( darbības ciklu uzsākot ; nosacijumi cikla turpināšanai ; soļu veikšana )

document.getElementById("automatic_count").innerHTML = text;

// alternatīva
// pāra skaitļiem
let text1 = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    text1 = text1 + i + "<br>";
  }
}

document.getElementById("automatic_count1").innerHTML = text1;

// alternatīva
// nepāra skaitļiem  >> ja grib pāra skaitļus sākotnējā i vērtība = 0 (vai 2) un ja grib nepāra i =1 //
let text2 = "";
for (let i = 1; i < 11; i += 2) {
  if (i % 2 > 0) text2 = text2 + i + "<br>";
}

document.getElementById("automatic_count2").innerHTML = text2;

// nepāra un pāra skaitļi vienlaicīgi ar else //
// if (i % 2 == 0)  i dalijums ar 2

let text3 = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    text3 = text3 + i + " pāra skaitlis<BR>";
  } else {
    text3 = text3 + i + " nepāra skaitlis<BR>";
  }
}
document.getElementById("automatic_count3").innerHTML = text3;

/*
let text5 = "";
for (let i = 1; i < 25; i++) {
  switch (i)
{
    case i % 2 == 0:
    text5 = text5 + i + " dalās ar 2<BR>";
      
}
}
document.getElementById("automatic_count4").innerHTML = text5;
   */

text4 = "";
var dalit = [2, 3, 4, 6, 8];
for (let dalam = 1; dalam < 26; dalam++) {
  let flag = 1;
  text4 = text4 + dalam + " dalās ar skaitli ";
  for (let k = 0; k < dalit.length; k++) {
    if (dalam % dalit[k] == 0) {
      if (flag == 1) {
        text4 = text4 + "dalās ar skaitli ";
        flag = 0;
      }
      text4 = text4 + dalit[k] + ", ";
    }
  }
if ( flag == 0 )
{text4 = text4.slice (0,text4.length-1); }

  if (dalam % 2 == 0) {
    text4 = text4.slice (0,text4.length-1) + " pāra skaitlis ";
  } else {
    text4 = text4.slice (0,text4.length-1) + " nepāra skaitlis ";
  }
  text4 = text4 + "<BR>";
}

document.getElementById("automatic_count4").innerHTML = text4;

/*
text += cars[0] + "<br>"
text = text + cars[0] + "<br>" 
*/
