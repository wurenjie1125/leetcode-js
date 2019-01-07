/**
 * @param {number[]} prices
 * @return {number}
 */
//买卖股票的最佳时机
// 暴力法
// var maxProfit = function(prices) {
//
//   if(prices.length === 0){
//     return 0;
//   }
//   var maxValue = 0;
//   for(var i = 0; i < prices.length - 1; i++){
//     for(var j = i + 1; j < prices.length; j++){
//       var profit = prices[j] - prices[i];
//       if(profit > maxValue){
//         maxValue = profit;
//       }
//     }
//   }
//   return maxValue;
//
// };

//O(n)
var maxProfit = function(prices) {
  var minPrice = prices[0];
  var maxValue = 0;
  for(var i = 0; i < prices.length; i++){
   if(prices[i] < minPrice) {
     minPrice = prices[i]
   }else if(prices[i] - minPrice > maxValue) {
     maxValue = prices[i] - minPrice
   }
  }
  return maxValue;

};
var profit = maxProfit([2,4,1])
console.log(profit)