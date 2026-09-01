let transaction: number[]= [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let totalcredittran: number=0,totaldebittran: number=0,totalcreditCount=0,totaldebitCount=0,TotalAvailableMoney=0;
let suspe: number = 0


for(let a:number = 0 ; a<transaction.length; a++)
{
    if(transaction[a]! > 0){
        totalcredittran = totalcredittran + 1;
        totalcreditCount = totalcreditCount + transaction[a]!;
        if(transaction[a]! > 10000)
        {
            console.log(`Suspicious credit transaction ${transaction[a]}`);
            suspe = suspe +1;
        }
    }
    else 
    {
        totaldebittran = totaldebittran + 1;
        totaldebitCount = totaldebitCount + transaction[a]!;
        if(transaction[a]! < -10000)
        {
            console.log(`Suspicious debit transaction ${transaction[a]}`);
            suspe = suspe +1;
        }
    }
   TotalAvailableMoney = TotalAvailableMoney + transaction[a]!;
}

console.log(`total number of transactions ${transaction.length}`);
console.log(`credit transaction count : ${totalcredittran},  debit transaction count : ${totaldebittran}`);
console.log(`credit transaction Amount : ${totalcreditCount},  debit transaction Amount : ${totaldebitCount}`);
console.log(`Suspicious transaction count ${suspe}`);
console.log(`TotalAvailableMoney : ${TotalAvailableMoney}`);
