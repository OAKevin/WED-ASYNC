const a = "how many vowels are in the string?"
var char = a.length;
// for (var i = 0; i < a.length; i++){
//     if (a[i] == "a" || "e" || "i" || "o" || "u"){
//         vowel++;
//     }
// }
const vowel = a.match(/[aeiou]/gi).length;
console.log("There are "+char+" characters in this string.")
console.log("There are "+vowel+" vowels in this string.")
