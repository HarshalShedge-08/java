// 1. veg
// 2. non-veg


let menu;
menu=2;

switch (menu){

case 1:
console.log("Veg");
let veg;
veg=2;

switch(veg){
case 1:
console.log("Panner Masala");
break;

case 2:
console.log("Veg-Biryanai");
break;

default:
console.log("Not Available");



}
break;

case 2:
console.log("Non-Veg");
let nonVeg;
nonVeg=1;

switch(nonVeg){
case 1:
console.log("Chiken Masala");
break;

case 2:
console.log("Chiken-Biryanai");
break;

default:
console.log("Not Available");



}
break;

default:
console.log("Not in Menu");

}



