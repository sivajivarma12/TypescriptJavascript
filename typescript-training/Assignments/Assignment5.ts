// Define an interface for employee details
interface Employee {
  salary: number;
  experience: number;
  rating: number;
}

let employees: Map<string, Employee> = new Map();

employees.set("Alice Johnson", { salary: 75000.0, experience: 5.1, rating: 4.2 });
employees.set("Bob Smith", { salary: 68000.0, experience: 3.2, rating: 3.8 });
employees.set("Charlie Brown", { salary: 82000.0, experience: 7.1, rating: 4.5 });
employees.set("Diana Prince", { salary: 90000.0, experience: 10.2, rating: 2.5 });
employees.set("Ethan Hunt", { salary: 60000.0, experience: 2.4, rating: 3.5 });

for (let [name, details] of employees) {
  let variablePer = 0;
  let bonus = 0;

  if (details.rating >= 4) {
    variablePer = 0.15;
    bonus = 1500;
  } else if (details.rating >= 3) {
    variablePer = 0.10;
    bonus = 1200;
  } else {
    variablePer = 0.03;
    bonus = 300;
  }

  let reward = details.experience >= 5 ? 5000 : 0;

  // Correct formula
  let hikeAmount = (details.salary * variablePer) + bonus + reward;
  let hikePercent = (hikeAmount / details.salary) * 100;

  console.log(`${name} → Hike Amount = ₹${hikeAmount}, Hike % = ${hikePercent.toFixed(2)}`);
}
