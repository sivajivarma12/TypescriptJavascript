//1. Temperature of a city in degrees Celsius: 25.5
let temparature: number = 25.5;
console.log(`Temperature of the city is ${temparature}`);
//2. Whether a customer has placed an order: true or false
let orderPlacementStatus: boolean = true;
console.log(`Order status ${orderPlacementStatus}`);
//3. Person's phone number: "123-456-7890"
let phoneNumber: string ="123-456-7890";
console.log(`phone number ${phoneNumber}`);
//4. Amount of money in a customer's bank account: 1000.50
let customerAmount: number = 1000.50;
console.log(`Account Balance : ${customerAmount}`);
//5. Person's email address: "john.doe@example.com"
let emailAddress: string ="john.doe@example.com";
console.log(`Email Address ${emailAddress}`);
//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
interface location{
    "latitude" : number,
    "longitude" : number
} 

let locationDetails: location = {
    "latitude" : 37.7749,
    "longitude" : -122.4194
}
console.log(`latitude : ${locationDetails.latitude}`)
console.log(`latitude : ${locationDetails.longitude}`)
//7. Person's marital status: true or false
//8. Person's occupation: "Software Engineer"
//9. Person's favourite colour: "Blue"
//10.Current year: 2023
//interface
interface persondetails {
    "personMaritalStaus" : boolean,
    "personOccupation" : string,
    "personFavColour" : string,
    "currentDate" : string
}

let persondetails1 = {
    "personMaritalStaus" : true,
    "personOccupation" : "softerware engineer",
    "personFavColour" : "blue",
    "currentYear" : "2023"
}
console.log(`personMaritalStaus : ${persondetails1.personMaritalStaus}`)
console.log(`personOccupation : ${persondetails1.personOccupation}`)
console.log(`personaFavColor: ${persondetails1.personFavColour}`)
console.log(`year: ${persondetails1.currentYear}`)

//11.Number of followers on a social media platform: 1,000,000
//12.Rating of a movie: 7.5
//13.Person's blood type: 'A'
//14.Title of a book: "To Kill a Mockingbird"
//15.Number of employees in a company: 500
//16.Time of an event: 2:30 PM
let movieDetails: (string | number ) [] = ["1,000,000",7.5,"A","To Kill a Mockingbird",500,"2:30 PM"];
console.log(`Number of followers on a social media platform: ${movieDetails[0]}`);
console.log(`Rating of a movie : ${movieDetails[1]}`);
console.log(`Person's blood type: ${movieDetails[2]}`);
console.log(`Title of a book : ${movieDetails[3]}`);
console.log(`Number of employees in a company : ${movieDetails[4]}`);
console.log(`Time of an event : ${movieDetails[5]}`);

//17.Name of a country: "United States"
//18.Person's eye color: "Brown"
//19.Person's birthplace: "New York City"
//20. Distance between two cities: 200.5
// using tuple
let personDetails2: [string,string,string,number] = ["United States","Brown","New York City",200.5];
console.log(`Name of the country : ${personDetails2[0]}`);
console.log(`Person Eye color : ${personDetails2[1]}`);
console.log(`Person birthPlace : ${personDetails2[2]}`);
console.log(`distance between 2 cities : ${personDetails2[3]}`)