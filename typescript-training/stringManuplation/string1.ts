let sentence:string = "Typescript programming is fun and challenging";
console.log(sentence);

//2. Method to calculate the total number of characters available inside the string 
let totalLen:number = sentence.length;
console.log(`total length : ${totalLen}`);

//3. Method to get a specific character by using an index from the string
let charAtIndex:string = "";
console.log(`index at 0 ${sentence.charAt(0)}`);
console.log(`index at 10 ${sentence.charAt(10)}`);
console.log(`index at 8 ${sentence.charAt(8)}`);
console.log(`index at 9 ${sentence.charAt(9)}`);

//4. Method to eliminate unwanted spaces from the string. (The space added at the beginning and the space added at the end )
let sentence1:string = "    added space at starting and ending   ";
let trimsentence: string = sentence1.trim();
console.log(`trimvalue is :${trimsentence}`);
console.log(`before ${sentence1.length} and after ${trimsentence.length}`);

//5. Method to eliminate all the Typescript word with Javascript from the string.
let sentence2:string = "Typescript programming1234 is fun and challenging Typescript";
console.log(`replace TypeScript with JavaScript : ${sentence2.replace(/Typescript/g,"Javascript")}`);

//6. Method to eliminate all the alphabets from the string.
let finalValue:string = sentence2.replace(/[A-Za-z]/g,"");
console.log(finalValue);

let originalString:string = " Username : Admin | Password : admin123 ";
//7. Method to eliminate all the numbers from the string.
console.log("7. Method to eliminate all the numbers from the string.");
let noNumberString: string = originalString.replace(/[0-9]/g, "");
console.log(`Original string was : '${originalString}'`);
console.log(`String after eliminating all numbers is : '${noNumberString}'`);

//8. Method to eliminate all the special chars from the string.
console.log("8. Method to eliminate all the special chars from the string.");
let noSpecialCharsString: string = originalString.replace(/[^0-9a-zA-Z]/g, "");
console.log(`Original string was : '${originalString}'`);

//9. Method to Convert all the characters of the string into uppercase. 
console.log("9. Method to Convert all the characters of the string into uppercase.");
let uppercaseString = originalString.toUpperCase();
console.log(`Uppercase string is : ${uppercaseString}`);

//10. Method to Convert all the characters of the string into lowercase. 
console.log("10. Method to Convert all the characters of the string into lowercase.");
let lowercaseString = originalString.toLowerCase();
console.log(`Lowercase string is : ${lowercaseString}`);

//11. Method to extract part of the string 
console.log("11. Method to extract part of the string.");
let username: string = originalString.substring(12, 17);
let password: string = originalString.substring(31, 39);
console.log(`Original string was : '${originalString}'`);
console.log(`Username : '${username}'`);
console.log(`Password : '${password}'`);

//12. Method to extract part of the string from dynamic string
console.log("12. Method to extract part of the string from dynamic string");
let splittedString: string[] = originalString.split(" ");
console.log(`Splitted string is : ${splittedString}`);
let dynamicUsername: string = splittedString[3]!;
let dynamicPassword: string = splittedString[7]!;
console.log(`Dynamic Username : '${dynamicUsername}'`);
console.log(`Dynamic Password : '${dynamicPassword}'`);

//13.Method to compare two different string values 
console.log("13. Method to compare two different string values.");
//== (loose equality) Comparison using double equals (checks value only)
//=== (strict equality) Comparison using triple equals (checks value and data type)
//includes() =>Method to check if a string contains a specific substring.
//startsWith() => Method to check if a string starts with a specific substring.
//endsWith() => Method to check if a string ends with a specific substring.

console.log(`Check sivaji varma contains 'varma' : ${"".includes("sivaji varma")}`);
console.log(`Check sivaji varma starts with 'sivaji' : ${"sivaji".startsWith("sivaji")}`);
console.log(`Check sivaji varma ends with 'varma' : ${"sivaji varma".endsWith("varma")}`);
console.log(`Check sivaji varma == 'sivaji varma' : ${"sivaji varma" == "sivaji varma"}`);
console.log(`Check sivaji varma === 'sivaji varma' : ${"sivaji varma".toUpperCase() === "sivaji varma".toUpperCase()}`);

//14. Method to convert string to other data types and vice versa. 
console.log("14. Method to convert string to other data types and vice versa. ");
let stdCode: number = 144;
let phone: number = 234567;
let std: string = String(stdCode);
console.log(std + phone);

let balance: string = " Account balance: $19999.99 ";
balance = balance.replace(/[^0-9.]/g, "");
let bal: number = parseFloat(balance);
console.log(bal >= 10000);