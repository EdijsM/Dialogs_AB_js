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




var x = 45;
document.getElementById("dec").innerHTML = x;

var bit_number = 7^52;
var y = (x << (bit_number-7) ) >> bit_number;
var z = String(y);
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


document.getElementById("bin").innerHTML = z;



let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;

//** var lido cauri visam skriptam */
var a = 45;
console.log("a vērtība (no 'galvenā zara'): "+a);

{
    console.log("a vērtība (no 'skope'): "+a);
    var a = 46;
    console.log("a vērtība (no 'skope' kad pievienots jauns var ): "+a);
}
console.log("a (vērtība ārpus 'skope'): "+a); 


//** let strādā līdz {skope} un pēc vai arītikai iekš {skope} */
let b = 60;
console.log(b);

{
    let b = 61;
    console.log(b);  
}
console.log(b);

//** const nodefinē visā kodā vai {skopos} */
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