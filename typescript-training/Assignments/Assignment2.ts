//values storage
interface personalLayout{
    "customerName" : string,
    "creditScore" : number,
    "income" : number,
    "isEmployed" : boolean
    "debtToIncomeRatio" : number
}

let personalLayout = {
    "customerName" : "John Doe",
    "creditScore" : 720,
    "income" : 5000.0,
    "isEmployed" : true,
"debtToIncomeRatio" : 35.0
}

validateLoanEligibilityStatus(personalLayout);

function validateLoanEligibilityStatus(personalData : personalLayout): void
{
    if (personalData.creditScore >= 750){
        console.log(`Hi ${personalData.customerName} your loan got approved wihtin a low time`);
    }
    else if(personalData.creditScore >= 650){
        console.log(`Hi ${personalData.customerName} your loan is under progress as your credit score between 749 to 650..`);
        if(personalData.income >= 50000){
            console.log(`Hi ${personalData.customerName} your loan is under progress as salary is above and equal to 50000..`);
            if(personalData.isEmployed == true){
                console.log(`Hi ${personalData.customerName} your loan is under progress as you are employed..`);
                if(personalData.debtToIncomeRatio >= 40){
                    console.log(`Hi ${personalData.customerName} your loan got approved as requirement got approved`);
                }
                else
                    console.log(`Hi ${personalData.customerName} your loan got denied because your income debt is less`);
            }
            else 
                console.log(`Hi ${personalData.customerName} your loan got denied because your unemployed`);
        }
        else
            console.log(`Hi ${personalData.customerName} your loan got denied because your income is less than 50000`);
    }
    else if(personalData.creditScore<650){
        console.log(`Hi ${personalData.customerName} your loan got denied because you less credit score`);
    }
}