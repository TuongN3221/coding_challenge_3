// Task 1 - Product Price Management

let prices = [50.99, 23.99, 34.99, 64.99, 85.99, 100.99];// Declares array of intial prices
prices.push(69.98);// Adds new price to array

prices.shift(50.99);// removes the first price from array (50.99)
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

console.log(employee);// returns the new array of prices

// Task 4 - Customer Feedback Records
let feedback = [
    {
        customerName: "Stinky Fish",
        feedbackText: "I stink.",
        rating: 19,
    },
    {
        customerName: "Thalassophobic Fish", // Thalassophobia is the fear of the deep water or the ocean
        feedbackText: "AAAAAAAAAAA",
        rating: 0
    },
    {
        customerName: "Idiot Fish",
        feedbackText: "What?",
        rating: 2
    }
];// decalres array of three objects

feedback.push(
    {
        customerName: "Old Fish",
        feedbackText: "Im old.",
        rating: 1
    }
);// Adds a new feeback object to the array
console.log(feedback);

// Task 5 - Inventory Management System
let inventory = {
        itemName: "Thalassophobic Fish", 
        stockCount: 23,
        price: 94.89,

        //Calculates the total value of inventory
        calculateTotalValue: function() {
            return this.stockCount * this.price;
        }
};// decalres object inventory

//Returns the inventory and total inventory value
console.log("Inventory Detail:", inventory)
console.log("Total Inventory Value: $", + inventory.calculateTotalValue().toFixed(2));


