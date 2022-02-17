//exo1
var z = 4;
var x = 12;

  console.log(z);
  console.log(x);
  
//exo2
  var a = 10;
  var b = 5;
  
  console.log(a + b); 
  
  console.log(a - b); 
  console.log(a * b);
  console.log(a / b);

//exo3
var c = "coucou ";
var d = 'petite perruche';


    console.log(c + d); 

//exo4
var c = 'coucou';
var d = 'petite perruche';


//exo5
tmp = c;
c=d;
d=tmp;
console.log ("1 : " + c);
console.log("2 : " +d);

 //exo6 et 7
var g = 50;
var h = 50;

 function testNum(g,h) {
    let result;
    if (g > h) {
      result = g;
    } else if (g<h){
      result = h;
    }else {
        result = g+"="+h
    }
     return result;
  }
  
  console.log(testNum(g,h));

  
//exo7
var myArray = [1, 5, 6, 2, 3];
var m = Math.max(...myArray);
console.log(m)

//exo8
var min=1; 
var max=100;  
var random = Math.random() * (max - min) + min; 
console.log(Math.floor(random));




// Exo 9

console.log("Exo 9");

for (var ra = 0; ra < 10; ra++) {
    console.log(Math.floor(Math.random() * 100));
}

// Exo 10

console.log("Exo 10");

var t = 0;

while (t <= 90) {
    console.log(t = Math.floor(Math.random() * 100));
}