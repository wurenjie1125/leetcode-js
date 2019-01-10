/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  //找到数组中最大值的下标
  function getMaxHeightIndex(arr){
    var maxIndex = 0;
    for(var i = 1; i < arr.length; i++){
      if(arr[i] > arr[maxIndex]){
        maxIndex = i
      }
    }
    return maxIndex;
  }
  var maxIndex = getMaxHeightIndex(height);
  var amount = 0;
  //暂时最大高度的柱子高度。
  var barMaxheight = 0;
  //从左往最大靠拢
  for(var i = 0; i < maxIndex; i++){
    if(barMaxheight < height[i]){
      //最大柱子重置
      barMaxheight = height[i]
    }else{
      //每一个格子的蓄水高度等于该格之前最大柱子高度之差。
      amount +=  barMaxheight - height[i]
    }
  }
  barMaxheight = 0;
  //从右往最大靠拢，和从左往右一样
  for(i = height.length - 1; i > maxIndex; i--){
    if(barMaxheight < height[i]){
      barMaxheight = height[i]
    }else{
      amount +=  barMaxheight - height[i];
    }
  }
  return amount;
};
result = trap([4,2,0,3,2,5]) //9
result = trap([0,1,0,2,1,0,1,3,2,1,2,1]) // 6
console.log('result',result)
