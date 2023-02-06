//Variables
var totalMonths = 0;
var sumOfProfits = 0;
var diffPerMonth = finances;
var diff = 0;
var sumOfDiff = 0;
var greatestIncrease = [0, 0, 0];
var greatestDecrease = [0, 0, 0];

//The total number of months included in the dataset.
var totalMonths = finances.length;
console.log("total months:" + totalMonths);

for (i = 0; i < finances.length; i++) {
  //Net profit/losses over entire period
  sumOfProfits += finances[i][1];
  //To calculate the individual changes per month
  if (i > 0) {
    diff = diffPerMonth[i][1] - diffPerMonth[i - 1][1];
    diffPerMonth[i].push(diff);
    sumOfDiff += diffPerMonth[i][2];
    //To find the greatest increase in profit
    greatestIncrease = diffPerMonth[i];
    //To find the greatest decrease in profit
  } else if (greatestDecrease[2] > diffPerMonth[i][2]) {
    greatestDecrease = diffPerMonth[i];
  }
}
