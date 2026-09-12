let sum: number = 5;
for (let i: number = 1; i <= sum; i++) {
    let linevalue:string="";
    let SpaceCount: number = sum - i;
    let starCount: number = i;
        for (let j: number = 1; j <= SpaceCount; j++) {
            linevalue = linevalue+" ";
        }
        for (let k: number = 1; k <= starCount; k++) {
            linevalue = linevalue+"*";
        }
console.log(linevalue);
}

console.log("----------------------------------")
// 1. Count the total number of words in the sentence.
// 2. Print the sentence words in reverse order.
// 3. Convert the first character of each word to uppercase and print original sentence

// String sentence = "Java programming is fun and challenging";
let sentence:string = "Java programming is fun and challenging";
let array1:(string) [] = sentence.split(" ");
let revSent: string="";
for(let i:number = array1.length-1; i>=0; i--)
{
    revSent = revSent+array1[i]+" ";   
}
console.log(revSent);
console.log(`length of the string : ${sentence.length}`);


console.log("______________________________");
let sentence1:string = "Java programming is fun and challenging";
let allWords:(string) [] =[];
let finalFirstChar:string="";
allWords = sentence1.split(" ");
for(let i:number=0;i<=allWords.length-1;i++)
{ 
    let word123:string = "";
    word123 = allWords[i]!;
    let first:number = 0;
    if(first==0)
      finalFirstChar = finalFirstChar + allWords[i]!.charAt(0).toUpperCase();

    for(let k=1;k<=word123.length-1;k++)
            finalFirstChar = finalFirstChar + word123[k];
    
    finalFirstChar = finalFirstChar + " ";
}
console.log(finalFirstChar);

console.log("-----------------------------------------------");
let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let paraWord:(string) [] = paragraph.split(" ");
let countJava:number =0;
for(let value:number=0 ;value<=paraWord.length-1;value++)
{
    if(paraWord[value] === "Java")
    {
        countJava += 1;
        console.log(`found java and it index is ${value}`);
    }
}
console.log(`countJava : ${countJava}`)