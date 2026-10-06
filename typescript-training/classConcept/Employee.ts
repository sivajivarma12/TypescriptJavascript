interface employee1 {
            "name": string,
            "Designation": string,
            "experience" : number,
            "hikePer" : number[],
            "EPFO" :{
                "UAN" : number,
                "EPFO" : string,
            },
            "ADDRESS":{
                "Area" : string[],
                "City" : string,
                "PINCODE" : number,
            },
            "personal Details"? : {
                "pervoiusCompanies" : string[],
                "martialStatus" : boolean,
                "numberOfKids" : number
            }
        }
class Employee {
    constructor() {
        let Emp : employee1={
            "name": "sivaji varma",
            "Designation": "Senior Tester",
            "experience" : 11.12,
            "hikePer" : [20,15],
            "EPFO" :  {
                "UAN" : 123456789,
                "EPFO" : "SDF123456789",
            },
            "ADDRESS" : {
                "Area" : ["ABCASDD","SDFG","SDERT"],
                "City" : "vizag",
                "PINCODE" : 530040,
            }
        }
    }
}

let empobj = new Employee();
