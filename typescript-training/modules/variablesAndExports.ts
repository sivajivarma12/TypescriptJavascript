let sum: (number | string | boolean)[] = [1234, 2345, "sivajivarma", true];

// Function that takes a number and an array of numbers
function sumOfNumber(a: number, sum1: number[]): number {
    let totalsum=0;
    for(let value of sum1)
    {
        totalsum += value;
    }
    return a + totalsum;
}

export { sum, sumOfNumber };