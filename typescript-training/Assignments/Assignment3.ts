let SName: string [] = ["suresh","Mahesh","Naresh"];
let SMarks: number [] = [75,80,82];
let TotalMarks: number = 0;

for(let c:number = 0; c<SMarks.length; c++)
{
    SMarks[c]! += 10;
    TotalMarks = TotalMarks + SMarks[c]!;
}
let AvgMarks :number = 0
AvgMarks = TotalMarks/SMarks.length
for(let b:number=0 ; b < SName.length; b++)
{
    console.log(`${SName[b]} : ${SMarks[b]}`);
}
console.log(`Avg marks : ${AvgMarks}`);