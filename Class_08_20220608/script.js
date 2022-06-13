/** 
a = 45;
b = 5;
d = 5;
f = a-b;
e = f + a;
console.log(e);
console.log(f);
console.log(a+b+e**d); 
**/









/*  uzdevums 2

r - riņķa līnijas radius 
p - pī
c - riņa linajs garums
*/


var r = 6371;
console.log("Rādius: " +r)

p = 3.14159 ;
console.log("π: " +p)

c = 2*p*r;
console.log("riņķa līnija  " +c)

num = c;
roundedString = num.toFixed(2);
rounded = Number(roundedString);



document.getElementById("radiuss").innerHTML = 'Ja pieņemam ka zemes radius ir ' + r + ' km ' + 'tad ekvadora aptuvanais garums ir ' + rounded + 'km';

//* uzdevums 2a

function myFunction() {
    var x = document.getElementById("myText").value;
    p = 3.14159 ;
    c = 2*p*x;
    num = c;
roundedString = num.toFixed(2);
rounded = Number(roundedString);
    
document.getElementById("ekvadors").innerHTML = rounded + 'km';
 }


// uzdevums 3

var procenti = 0.01;
    neme = Gita;
    gadi = x








// uzdevums 1
var x = 45;
 bit_number = 2 ;
 y = (x >> 7 ) & bit_number;
 z = String(y);
console.log("7. bita tatēlošana  " +y)
document.getElementById("dec").innerHTML = x;

y = (x >> 6 ) & 1;
console.log("6. bita tatēlošana  "+y)
z = z + '' + String(y)
y = (x >> 5 ) & 1;
console.log("5. bita tatēlošana  "+y)
z = z + '' + String(y)
y = (x >> 4 ) & 1;
console.log("4. bita tatēlošana  "+y)
z = z + '' + String(y)
y = (x >> 3 ) & 1;
console.log("3. bita tatēlošana  "+y)
z = z + '' + String(y)
y = (x >> 2 ) & 1;
console.log("2. bita tatēlošana  "+y)
z = z + '' + String(y)
y = (x >> 1 ) & 1;
console.log("1. bita tatēlošana  "+y)
z = z + '' + String(y)
y = (x >> 0 ) & 1;
console.log("0. bita tatēlošana  "+y)
z = z + '' + String(y)

document.getElementById("bin").innerHTML = z;


/** nepareizais
    y = (x << (bit_number-6) ) >> bit_number;
    z = z + '_' + String(y)
    y = (x << (bit_number-5) ) >> bit_number;
    z = z + '_' + String(y)
    y = (x << (bit_number-4) ) >> bit_number;
    z = z + '_' + String(y)
    y = (x << (bit_number-3) ) >> bit_number;
    z = z + '_' + String(y)
    y = (x << (bit_number-2) ) >> bit_number;
    z = z + '_' + String(y)
    y = (x << (bit_number-1) ) >> bit_number;
    z = z + '_' + String(y)
    y = (x << (bit_number-0) ) >> bit_number;
    z = z + '_' + String(y) 
**/


/** var lido cauri visam skriptam
var a = 45;
console.log("a vērtība (no 'galvenā zara'): "+a);

{
    console.log("a vērtība (no 'skope'): "+a);
    var a = 46;
    console.log("a vērtība (no 'skope' kad pievienots jauns var ): "+a);
}
console.log("a (vērtība ārpus 'skope'): "+a); 


//** let strādā līdz {skope} un pēc vai arītikai iekš {skope} 
let b = 60;
console.log(b);

{
    let b = 61;
    console.log(b);  
}
console.log(b);

//** const nodefinē visā kodā vai {skopos} 
const c = 49;
console.log("a vērtība (no 'galvenā zara'): "+c);

{
    const c = 41;
    console.log("a vērtība (no 'skope' kad pievienots jauns var ): "+c);
}
console.log("a (vērtība ārpus 'skope'): "+c); 
{
    const c = 42;
    console.log("a vērtība (no 'skope' kad pievienots jauns var ): "+c);

}
*/


