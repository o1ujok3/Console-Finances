//Setting global variables
var totalMonths = 0;
var sumOfProfits = 0;
var diffPerMonth = finances;
var diff = 0;
var sumOfDiff = 0;
var greatestIncrease = [0, 0, 0];
var greatestDecrease = [0, 0, 0];

//Calculate the total number of months included in the dataset
var totalMonths = finances.length;

for (i = 0; i < finances.length; i++) {
  //Calculate the net total amount of Profit/Losses over the entire period
  sumOfProfits += finances[i][1];
  //To calculate the individual changes per month
  if (i > 0) {
    diff = diffPerMonth[i][1] - diffPerMonth[i - 1][1];
    diffPerMonth[i].push(diff);
    sumOfDiff += diffPerMonth[i][2];
    if (greatestIncrease[2] < diffPerMonth[i][2]) {
      //Calculate the greatest increase in profits (date and amount) over the entire period
      //To find the greatest increase in profit
      greatestIncrease = diffPerMonth[i];
      //To find the greatest decrease in profit
    } else if (greatestDecrease[2] > diffPerMonth[i][2]) {
      greatestDecrease = diffPerMonth[i];
    }
  }
}
//Calculate the average of the changes in Profit/Losses over the entire period
var avChange = sumOfDiff / (diffPerMonth.length - 1);

//Logging to console.

console.log(`
Financial Analysis
----------------------------
Total Months: ${totalMonths}
Total: $${sumOfProfits}
Average Change: $${avChange.toFixed(2)}
Greatest Increase in Profits: ${greatestIncrease[0]} ($${greatestIncrease[2]})
Greatest Decrease in Profits: ${greatestDecrease[0]} ($${greatestDecrease[2]})
`);
