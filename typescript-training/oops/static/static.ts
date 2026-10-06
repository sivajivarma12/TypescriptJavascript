class Space{

    static spaceCenter:string = "ISRO";
    spacePlace:string = "AP";

    static printSpaceLaunch(date:number){
        console.log(`${this.spaceCenter} from ${new Space().spacePlace} launch preparation "${date}"`);
    }
}

let obj = new Space();
let date = new Date()
Space.printSpaceLaunch(date.getDate());
console.log(Space.spaceCenter);
console.log(`${Space.spaceCenter} from ${new Space().spacePlace} launch preparation "2nd Oct"`);