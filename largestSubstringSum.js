/**
 * @param {number[]} nums
 * @return {number}
 */
//最大子序和
  //给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  //[-2,1,-3,4,-1,2,1,-5,4] => [4,-1,2,1] => 6
var maxSubArray = function(nums) {
  var value = nums[0];
  var maxValue = nums[0];
  for(var i = 1; i < nums.length; i++){
    //如果小于0，则抛弃之前的子序列，从新的开始
    if(value < 0){
      value =  nums[i];
    }else{
      //否则累加
      value += nums[i];
    }
    //将子序列和现有的最大进行比较
    if(value > maxValue){
      maxValue = value
    }
  }
  return maxValue
};
result = maxSubArray([-2,-1]); //-1
console.log('result',result)
result = maxSubArray([-1,-1,-2,-2]); //-1
console.log('result',result)
result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log('result',result)
result = maxSubArray([1,2]);
console.log('result',result)
result = maxSubArray([-1,-2]);
console.log('result',result)

