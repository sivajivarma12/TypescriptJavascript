class Resturnant{
    private resutName:string = "";
    private resutArea:string = "";
    private resutPinCode:number = 0;
    private onlineDelivery:boolean = false;

    public setRestname(resutName1:string) : void
    {
        this.resutName = resutName1;
    }
    public setRestArea(resutArea1:string) : void
    {
        this.resutArea = resutArea1;
    }
    public resutPinCode1(resutPinCode1:number) : void
    {
        this.resutPinCode = resutPinCode1;
    }
    public onlineDelivery1(onlineDelivery1:boolean = false) : void
    {
        this.onlineDelivery = onlineDelivery1;
    }

   public getRestName():string{
        return this.resutName;
   }
   public getresutArea():string{
        return this.resutArea;
   }
   public getresutPinCode():number{
        return this.resutPinCode;
   }public getOnlineDelivery():boolean{
        return this.onlineDelivery;
   }

}

class Zomato
{
    printData() {
    let obj = new Resturnant();
    obj.setRestname("Pista house");
    obj.setRestArea("Adarshnagar");
    obj.resutPinCode1(123456);
    obj.onlineDelivery1();
    console.log(`${obj.getRestName()} is located in area : ${obj.getresutArea()} and pincode : ${obj.getresutPinCode()} and online status ${obj.getOnlineDelivery()}`)
    }
}

let obj1 = new Zomato();
obj1.printData();