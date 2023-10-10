// challenge
/* 
1. take a string variable
2. make it such that everytime we refresh the page a random character from your string is displayed in the console

*/

// shortcut for console.log = option + /

const a = "intellipaat";
const x = a.charAt(Math.floor(Math.random() * a.length));
console.log(x);