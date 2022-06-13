
var x = 45;
document.getElementById("dec").innerHTML = x;


var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
/*

x >> 0 -> 60(dec) atbilst 0011 1100 (bin)
0011 11 00 >> 0 -> 0011 1100

*/

console.log("0. bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. bits: " + bit_sequence);

zero_th_bit = (x >> 1) & 1;


console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. bits: " + bit_sequence);

document.getElementById("bin").innerHTML = bit_sequence;


zero_th_bit = (x >> 2) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 2): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. bits: " + bit_sequence);

zero_th_bit = (x >> 3) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 2): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. bits: " + bit_sequence);

zero_th_bit = (x >> 4) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 2): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3.  un 4 bits: " + bit_sequence);

zero_th_bit = (x >> 5) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 2): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. bits: " + bit_sequence);

zero_th_bit = (x >> 6) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 2): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. un 6. bits " + bit_sequence);

zero_th_bit = (x >> 7) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 2): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. un 6. un 7. bits " + bit_sequence);

