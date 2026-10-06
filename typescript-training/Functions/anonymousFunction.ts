// Normal function


//name of the function : calculate
//parameter : x 
//input parameter data type : number
//return type : number

function calculate(x: number): number {
    return x * x;
}

//calling the normal function
console.log(calculate(2));
console.log(calculate(200));

// function as a parameter to another function

//name of the function : calculator
//parameter : y
//input parameter data type : function  ((x:number) => number)
//return type : number
function calculator(y: (x: number) => number) {
    console.log(y(2));
}

//calling the function
calculator(
    function (x: number): number {
        return x * x;
    }
)

//calling the function
calculator(
    function (a: number): number {
        return a / a;
    }
)


//calling the function
calculator(
    function (a: number): number {
        return a % a;
    }
)


let balnceLoanAmount:number = 500000;

function getAmount(amnt:(amt:number) => number){
    console.log(amnt(balnceLoanAmount));
}

getAmount(
    function (amnt:number): number{
        console.log(`${amnt}`);
         let interest: number = amnt * 0.12;
        console.log(`Interest amount ${interest}`)
        return interest;
    }

)