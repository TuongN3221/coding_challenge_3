// Task 1 - Product Price Management

let prices = [50.99, 23.99, 34.99, 64.99, 85.99, 100.99];// Declares array of intial prices
prices.push(69.98);// Adds new price to array

prices.shift();// removes the first price from array (50.99)
console.log(prices);

// Task 2 - Modifying Customer Orders
let quantity = [15, 23, 54, 84, 68, 33];// Declares array of numerical quantities
quantity[2] += 5;// Adds 5 to the third number in the array
console.log(quantity);

// Task 3 - Employee Performance Tracking
let employee = {
    name: "Big Fish", 
    role: "Small Fish Advisor",
    performanceScore: 23,
    isActive: true
}; // Declares object for employee

employee.performanceScore = 99;// Updates performanceScore property to a new score
employee.promotionEligible = true;// Adds boolean for promotion

console.log(employee);