let empIds = new Set();
empIds.add(1234);
empIds.add(1235);
empIds.add(1236);
empIds.add(1234);
empIds.add("sivaji");
empIds.add(true);
console.log(empIds);
empIds.delete(1234);
console.log(empIds);
console.log(empIds.values());
console.log(empIds.keys());


let emplMap = new Map();
emplMap.set("name","sivaji");
emplMap.set("ID","ICICIEMP0001");
emplMap.set("branch","Vizag");
console.log(emplMap.get("branch"));
console.log(emplMap);

let date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getUTCDate());
