async function name(params:number):Promise<string> {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve("sivaji");
        }, 10000);
    });
}
console.log(await name(1234));

function name2(params:string):Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("sivaji");
        },10000);
    });
}

function name3(param:number):Promise<number>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(123456); 
        },10000)
    });
}

console.log(await name3(12345));

function name4(paramas:number):Promise<string>{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve("sivaji");
        },10000)
    });
}


function name9(params:string):Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello");
        },10000)
    });
}

/*syntax
fuction name(param:datatype):Promise<datatype>
    return new Promise((reolve,reject)=>{
    setTimeout(()=>{
    if(true)
        resolve();
    else 
        reject();
    },10000)
    });

*/