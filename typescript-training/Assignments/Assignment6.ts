let num:number = 17;
let temp:number = 0;

if(num > 1)
{
for(let i:number =1; i<= num; i++)
{
    if(num % i == 0)
        temp += 1;
}

if(temp == 2)
    console.log(`${num} it is prime number`);
else 
    console.log(`${num} it is not a prime number`);
}
else
    console.log("1 is not prime" )