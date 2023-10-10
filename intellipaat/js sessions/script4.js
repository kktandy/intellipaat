/* assignment operators */

let x = 55;/* let, var, const */
console.log(x);

const stringDeclaration = "JS Session";

const y = 40;
const z = true;
const brahma = "brahma";
const a = brahma;

console.log(y);
console.log(z);
console.log(a);

console.log(stringDeclaration);
console.log(stringDeclaration.length);
console.log(x.length);
console.log(stringDeclaration.charAt(3));
console.log(stringDeclaration.indexOf("S"));
console.log(stringDeclaration.lastIndexOf("S"));
console.log(stringDeclaration.slice(3,8));
console.log(stringDeclaration.slice(-2));
console.log(stringDeclaration.toLowerCase());
console.log(stringDeclaration.toUpperCase());
console.log(stringDeclaration.includes("f"));

const b = stringDeclaration.split(" ");
console.log(b);

/* Numbers */

const d = 32;
const g = "32";
const e = 32.000000000;
const f = 32.0001;

console.log(d +8);
console.log(e);
console.log(f);
console.log(g +8);


const newNumber = Number(g);
console.log(newNumber);

console.log(d == newNumber);
console.log(d === newNumber);

// Math Functions

const k = Math.PI;
const l = 3.5;
console.log(k);
console.log(Math.trunc(k));// removes all the decimal numbers
console.log(Math.round(l));
console.log(Math.floor(3.999));
console.log(Math.ceil(3.000001));
console.log(Math.min(1,6,3,7,8,2));//Math.max will give the max value
console.log(Math.floor(Math.random()*100));

