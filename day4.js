function reverseString(str){
let newString = "";

for(let i= str.length-1; i>=0; i--){
    newString += str[i];
}
return newString;
}
const string = "egnellahc gnidoc fo syad 001 ym ot emocleW";
const result = reverseString("egnellahc gnidoc fo syad 001 ym ot emocleW");

console.log(result);

// You can see output as -Welcome to my 100 days of coding challenge