var tip = parseFloat(mealCost * tipPercent/100);
var tax = parseFloat(mealCost * taxPercent/100);
var totalCost = Math.round(mealCost + tip + tax);

console.log("The total meal cost is " + totalCost + " dollars.");