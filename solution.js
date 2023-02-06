// Finding the length of the initial array
console.log("Total Months: " + finances.length);

// I created a new array called sales to hold only the numerical values
for (let i = 0; i < finances.length; i++) {
  console.log(finances[i][1]);
}

let sales = [];
for (let i = 0; i < finances.length; i++) {
  sales.push(finances[i][1]);
  console.log(sales);
}

//sum of the values of profit/loss
let sum = 0;

for (let i = 0; i < sales.length; i++) {
  sum += sales[i];

  console.log("Total: " + sum);
}

// finding the difference in Value in the elements and adding them to a new array
let diff = [];
for (let i = 0; i < sales.length; i++) {
  diff.push(sales[i] - sales[i - 1]);

  console.log(diff);
}

// since the code for the difference will not have value (NaN) for the index[0] because index[0] cannot be subtracted from a previous value, it is manually appended to the new [diff] array.
diff[0] = sales[0];
console.log(diff);

//Total of the difference in each month is then calculated
let total = 0;
for (let i = 0; i < diff.length; i++) {
  total += diff[i];
  console.log(total);
}

//From the total, average is determined by using length of the array
let avg = total / diff.length;
console.log("Average Change: " + avg);

// The maximum and minimum value in the difference array (not determined, yet).

let max = Math.max(diff);
console.log("Greatest Increase in profit: " + max);

let min = Math.min(diff);
console.log("Greatest Dncrease in profit: " + min);
