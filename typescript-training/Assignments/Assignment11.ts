class Diamond{
    row:number = 5;  
    printDiamond(){
        for(let k:number=1;k<=this.row;k++)
        {
            let rowArray:string = "";
            let space:number = this.row-k;
            for (let i: number = 0; i < space; i++) 
                rowArray+=" "; 
            for(let j:number=1;j<=k;j++){
                rowArray+= String(j)+" ";
            }
            console.log(rowArray);
        }

        for(let k:number=this.row-1;k>0;k--)
        {
            let rowArray:string = "";
            let space:number = this.row-k;
            for (let i: number = 0; i < space; i++) 
                rowArray+=" "; 
            for(let j:number=1;j<=k;j++){
                rowArray+= String(j)+" ";
            }
            console.log(rowArray);
        }
    }
}
let obj = new Diamond();
obj.printDiamond();