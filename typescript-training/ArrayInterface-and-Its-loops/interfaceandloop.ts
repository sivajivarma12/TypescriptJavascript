interface student {
    "name" : string,
    "age" : number,
    "branch" : string,
    "grade" : string
    "resultStatus" : boolean,
    "place" : {
        "Area" : string,
        "PIN" : number,
        "BusNumber" : number,
        "BusFacility" : boolean
    }
}

let student1 : student={
"name" : "sivajivarma",
"age" : 22,
    "branch" : "CSE",
    "grade" : "A",
    "resultStatus" : true,
    "place" : {
        "Area" : "Vizag",
        "PIN" : 22331122,
        "BusNumber" : 2233,
        "BusFacility" : true
    }
}

// format objectname
for( let key in student1){
  //  console.log(key);
  // object[tmep as keyof interacename]
    console.log(student1[key as keyof student]);
}

for (let key in student1.place) {
  console.log(student1.place[key as keyof student["place"]]);
}