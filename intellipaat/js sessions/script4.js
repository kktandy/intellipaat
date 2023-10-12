/* --------------------------------assignment operators------------------------------- */

let x = 55;/* let, var, const */
/* console.log(x);

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
console.log(b); */

/* ---------------------------------Numbers----------------------------------------- */

/* const d = 32;
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
console.log(d === newNumber); */

//---------------------------------Math Functions---------------------------------------

/* const k = Math.PI;
const l = 3.5;
console.log(k);
console.log(Math.trunc(k));// removes all the decimal numbers
console.log(Math.round(l));
console.log(Math.floor(3.999));
console.log(Math.ceil(3.000001));
console.log(Math.min(1,6,3,7,8,2));//Math.max will give the max value
console.log(Math.floor(Math.random()*100)); */


//----------------------------------If-Else-------------------------------------------- 

/* const customerChoice = "pizza";
if(customerChoice){
    
    console.log(`you choice is ${customerChoice}`);
    if(customerChoice == "pizza"){

        console.log("your pizza is ready");
    }

else{
    
    console.log(`${customerChoice} is not part of the menu`);
}
} */

/* const yourScore = 75;
if(yourScore > 90){
    
    console.log("O");
}
else if(yourScore > 80){
    
    console.log("A");
}
else if(yourScore > 70){
    
    console.log("B");
}
else if(yourScore > 60){
    
    console.log("C");
}
else{
    
    console.log("D");
} */




//----------------------------Ternary Operator------------------------------------------

/* const yourScore = 89;

const yourGrade = yourScore>90?"O":yourScore>80?"A":yourScore>70?"B":yourScore>60?"C":"D";

console.log(yourGrade); */

//-----------------------------Input Statements------------------------------------------

/* alert("hello");

let variable = confirm("my name or other's");

let variable1 = prompt("enter your name");
if(variable1){
    
    console.log(variable1.trim());
    console.log(variable1.trim().length);//trim will remove the space before and after
}else{

    console.log(variable1??"you didn't enter anything");
} */


//--------------------------------------Loops----------------------------------------------

let myNumber = 0;

//while loop
/* while(myNumber<50){

    console.log(myNumber);
    myNumber++;
} */

//do-while loop

/* do{

    console.log(myNumber);
    myNumber++;
}while(myNumber<=50) */

//for loop
/* let name = "kuldeep";
for(let i = 0; i < name.length; i++){
    
    console.log(' :', name[i]);
} */

//-----------------------------------Functions------------------------------------------

/* function sum(a,b){
    return a+b;
}

console.log('total :', sum(2,3)); */

/* function emailName(email){
    return email.slice(0,email.indexOf("."));
}
console.log('trimmed email :', emailName("support@intellipaat.com"));
console.log('trimmed email :', emailName("kuldeep@intellipaat.com"));
console.log('trimmed email :', emailName("kumar@gmail.com"));



function properCase(name){return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}

console.log('Proper casing :', properCase("kULdeeP")); */


 // Assignments2 - do the below code that performs the camel casing
// function cameCase(){

// }

// console.log(camelCase("wAhEEd inTeLLipaat"))

 //Assignment3 - 

// if(player === computer){
    //tie game
// }
// else if(player === "rock"){
//     if(computer === "paper"){
        //computer wins
//     }else{
        //player wins
//     }
// }

//------------------------Arrow Function----------------------------------------------

// const variableName = (email) => {
// }


//-----------------------------Arrays-------------------------------------------------

const myArray = ["kuldeep", 7, true, "coaching"];

myArray[0] = "intellipaat";

console.log(myArray);

// myArray.length, console.log(myArray[0]); to get the last element in the array ------------> console.log(myArray[myArray.length-1])

//adding elements to array when we dont konw the length of the array

/* myArray.push("School");
console.log(myArray);

myArray.pop();

console.log(myArray);

myArray.unshift(127);//add the element at the start
console.log(myArray);

myArray.shift();//removes the element at the start
console.log(myArray);

const varLength = myArray.unshift(127);
console.log(varLength);3 */

myArray.splice(1,1, "dhoni");//first 1 is the index of the array and the second 1 is the amount of elemnets after the given index to be removed and the last argument is the the replace value 
console.log(' :', myArray);

myArray.reverse();
console.log(' :', myArray);


const arr = ['a','b','c','d'];
const newString = arr.join();
console.log(' :', arr);
console.log(' :', newString);

const newArr = newString.split(",");
console.log(' :', newArr);

const arr1 = ['12','10','2023'];
const arr2 = ['13','10','2023'];
const newArr1 = [arr1,arr2];
const newArr3 = [...arr2,...arr1];// concat method - 1
console.log(' :', newArr3);
console.log(' :', newArr1);
const newArr2 = arr1.concat(arr2);// concat method - 2
console.log(' :', newArr2);