// declare coinCounter function
function coinCounter (total) {
  // Initialize a JavaScript object to hold the coins
  let coinPurse = {};

  // assign current total and coin values
  let currentTotal = total;
  let quarterValue = .25;
  let dimeValue = .10;
  let nickelValue = .05;
  let pennyValue = .01;

  // run coinCalc and updateTotal for each coin type then assign it to
  // proper field in coinPurse object
  coinPurse.quarters = coinCalc(currentTotal, quarterValue);
  currentTotal = updateTotal(currentTotal, quarterValue);

  coinPurse.dimes = coinCalc(currentTotal, dimeValue);
  currentTotal = updateTotal(currentTotal, dimeValue);

  coinPurse.nickels = coinCalc(currentTotal, nickelValue);
  currentTotal = updateTotal(currentTotal, nickelValue);

  coinPurse.pennies = coinCalc(currentTotal, pennyValue);
  currentTotal = updateTotal(currentTotal, pennyValue);

  return coinPurse;
}

// calculate the number of coins that can go into a value
// then floor it to only get whole coins
function coinCalc(currentTotal, coinValue){
  return (Math.floor(currentTotal/coinValue))
}

// return the updated total value to two decimal places in order to account
// for JS rounding funkiness
function updateTotal(currentTotal, coinValue){
  return ((currentTotal%coinValue).toFixed(2))
}

// run the function and console log the coinPurse object
var coins = coinCounter(1.95);
console.log("coins are: ", coins);