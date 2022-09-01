var maxProfit = function (prices) {
  let minBuyPrice = Infinity;
  let mostProfit = 0;

  for (let price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price; // buy stock at this price
      console.log(minBuyPrice);
    } else if (price - minBuyPrice > mostProfit) {
      mostProfit = price - minBuyPrice; // sell stock at this price
      console.log(mostProfit);
    }
  }
  return mostProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
