const bUser = [ "Andris Lielais", "15000"];
const proc = [0.01, 0.02, 0.03, 0.04, 0.05];

var pelnja_gada = null;
var pelnja = [];
var teksts = "";

for (let gadi = 1; gadi < 6; gadi++) {

    pelnja_gada = 0;

    for (let i = 0; i < gadi; i++) {
        pelnja_gada = pelnja_gada + (pelnja_gada + bUser[1]) * (gadi/proc);
        console.log((i+1) + ". gadi " + pelnja_gada);
    }

    pelnja[(gadi - 1)] = pelnja_gada;
    teksts = teksts + gadi + ".gadi peļņa būs " + pelnja[(gadi - 1)].toFixed(2) + " EUR(Gada proc. likme "+ gadi+"%)<BR>";
}

document.getElementById("klients2").innerHTML = bUser[0];
document.getElementById("piedavajums3").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = teksts;