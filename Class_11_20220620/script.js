/* var c = 2,
  d = 1,
  e = 3;

if (c > d && c > e) {
  console.log("Vislielākais ir c=" + c);
  if (d > e) {
    console.log("Nākamais ir d=" + d);
    console.log("Mazākais ir e=" + e);
  } else {
    console.log("Nākamais ir e=" + e);
    console.log("Mazākais ir d=" + d);
  }
} else if (d > e && d > e) {
  console.log("Vislielākais ir d=" + d);
  if (c > e) {
    console.log("Nākamais ir c=" + c);
    console.log("Mazākais ir e=" + e);
  } else {
    console.log("Nākamais ir e=" + e);
    console.log("Mazākais ir c=" + c);
  }
} else {
  console.log("Vislielākais ir e=" + e);
  if (d > c) {
    console.log("Nākamais ir d=" + d);
    console.log("Mazākais ir c=" + c);
  } else {
    console.log("Nākamais ir c=" + c);
    console.log("Mazākais ir d=" + d);
  }
}
*/

/* var a=1,
    b=2,
    c=3,


//console.log("a= "+ a + " b= "+ b + " c= " + c);

if (b>a)
{
   [a,b]=[b,a];

console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (c>a)
    {
        [a,c]=[c,a];
console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (c>b)
    {
       [c,b]=[b,c]
    }

console.log("a= "+ a + " b= "+ b + " c= " + c); */



const x = [2,1,3]


document.getElementById("Pirms").innerHTML = "a= "+ x[0] + " b= "+ x[1] + " c= " + x[2];

if (x[0]>x[1])
{
   [x[0],x[1]]=[x[1],x[0]];

//console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (x[2]>x[0])
    {
        [x[2],x[0]]=[x[0],x[2]];
//console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (x[2]>x[1])
    {
        [x[2],x[1]]=[x[1],x[2]];
    }

console.log("a= "+ x[0] + " b= "+ x[1] + " c= " + x[2]);
document.getElementById("Pec").innerHTML = "a= "+ x[0] + " b= "+ x[1] + " c= " + x[2];


