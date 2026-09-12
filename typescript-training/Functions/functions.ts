let array1:(number) [] = [1,2,3,8,5,6];

let tuple1:[number,string,boolean] =[123,"sivaji",true]; 

let set1:Set <number | string> = new Set();
set1.add(1234);
set1.add("sivaji");

let map1: Map<string , string | number> = new Map();
map1.set("name","sivaji");
map1.set("value",1234)
function values2(array1: number[], tuple1: [number,string,boolean], set1 :Set<number|string>,map1 : Map<string,string | number>):void
{
    console.log(array1);
    console.log(tuple1);
    console.log(set1);
    console.log(map1);
}

values2(array1,tuple1,set1,map1)
function getvalues(a:number,b:string,c:boolean):void
{
    console.log(`${a} , ${b} , ${c}`);
}

getvalues(123,"sivaji",true);

function getvalues1(a:number,b:string,c?:boolean):void
{
    console.log(`${a} , ${b}, ${c}`);
}
getvalues1(1234,"sivaji");
getvalues1(123,"sivaji",true);

function getvalues2(a:number,b:string,c:boolean=false):void
{
    console.log(`${a} , ${b}, ${c}`);
}
getvalues2(12345,"varma",true);
getvalues2(12345,"varma");