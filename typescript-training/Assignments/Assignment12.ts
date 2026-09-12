class Stock{
 sellAndBuyPrice:(number) []=[7,1,5,3,6,4];
 getProfitDataDay()
 { 
    let tempprofit:number=0;
    let profit:number=0;
    let tempbuy:number=0;
    let tempsell:number=0;
    for(let i:number=0;i<this.sellAndBuyPrice.length-2;i++)
    {
        if(this.sellAndBuyPrice[i]! <= this.sellAndBuyPrice[i+1]!)
        {
            tempprofit = this.sellAndBuyPrice[i+1]! - this.sellAndBuyPrice[i]!;
            if(profit < tempprofit)
            {
                tempbuy = this.sellAndBuyPrice[i]!;
                tempsell = this.sellAndBuyPrice[i+1]!;
                profit = tempprofit;
            }
        }

    }
    console.log(`buyPrice : ${tempbuy} sellPrice : ${tempsell}  profit : ${profit}`);
 }
}

let obj = new Stock();
obj.getProfitDataDay();