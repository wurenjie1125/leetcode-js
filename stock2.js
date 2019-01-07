/**
 * @param {number[]} prices
 * @return {number}
 */
  //买卖股票的最佳时机2
  //给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
  //设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
  //你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
  //for example:
  //[7,1,5,3,6,4] => 7
  //[1,2,3,4,5] => 4
  //[7,6,4,3,1] => 0
  //[2,1,2,0,1] => 2

  //这个超出了时间限制 199/201
var maxProfit1 = function(prices) {
  //获取每颗子树的最大价格，
  function getUnitPrice(str){

    var childMaxPrice = 0;

    for(var i = 1; i < str.length; i++){
      var childrenPrice = 0;
      var ownPrice = 0;
      var start = str[0];
      //如果趋势是往上，则保存这两个差值作为交易，把之后的数组进行递归
      if (str[i] > start) {
        ownPrice = str[i] - start;
        var sliceArray =str.slice(i + 1);
        //如果截取后的长度小于2，则无法完成交易，不必继续
        if(sliceArray.length >= 2){
          childrenPrice = getUnitPrice(sliceArray);
        }
        if( childrenPrice + ownPrice > childMaxPrice ){
          childMaxPrice = childrenPrice + ownPrice;
        }
        //趋势往下则说明要去掉第一个值，进行递归可获得利益最大。也就是重新定义波谷
      }else{
        start = str[i];
        childrenPrice = getUnitPrice(str.slice(i));
        if( childrenPrice + ownPrice > childMaxPrice ){
          childMaxPrice = childrenPrice + ownPrice;
        }
        break;
      }
    }
    return childMaxPrice;
  }
  return getUnitPrice(prices)
};

//波峰波谷法：
//不觉得这道题给的例子会有歧义么?波峰波谷法的前提是我可以当天同时卖出再买进，
// 而例子卖出的当天都不会买进的，很容易认为前提就是这样的。。。。
var maxProfit = function(prices) {
  var maxValue = 0;
  for(var i = 0; i < prices.length - 1 ; i++){
    if(prices[i] < prices[i+1]){
      maxValue += prices[i+1] - prices[i];
    }
  }
  return maxValue
}

var result = maxProfit([1,2,3,4,5]); //corr:4
console.log('result',result)

result = maxProfit([7,6,4,3,1]) // 0
console.log('result',result)

result = maxProfit([2,1,2,0,1]) // 2
console.log('result',result)

result = maxProfit([7,1,5,3,6,4]) //7
console.log('result',result)

