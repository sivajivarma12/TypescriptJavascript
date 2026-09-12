let arrayOfValues:(number | string | boolean) [] = [1234,123,54,566.76,"sivaji",'a',1234,true,false];
let sumOfIntergerValusIs:number = 0;

for(let value of arrayOfValues)
{
    if (typeof value === "number")
        sumOfIntergerValusIs = sumOfIntergerValusIs + value;  
}
console.log(sumOfIntergerValusIs);

console.log("--------------------------------------------------");

let sum: number = 0;

for (let val of arrayOfValues) {
  try {
    // Try converting to number
    let num = Number(val);
    console.log(num);
    // Check if conversion is valid (NaN means not a number)
    if (!isNaN(num)) {
      sum += num;
    } else {
      throw new Error("Not a number");
    }
  } catch (e) {
    // Ignore non-numeric values
  }
}

console.log(sum);
// Output: 3211.76

let filteredValue = arrayOfValues.filter(val => typeof val === "number" && val > 100 && val < 1000);
console.log(filteredValue);
console.log(arrayOfValues.includes(123));
console.log(arrayOfValues.toReversed());
console.log(arrayOfValues.sort());
console.log(arrayOfValues.toSorted());
console.log(arrayOfValues.findIndex(val => val == "sivaji"));