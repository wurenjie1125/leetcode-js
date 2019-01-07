/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
//注意：答案中不可以包含重复的三元组。
  //nums = [-1, 0, 1, 2, -1, -4]
  /*
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
   */
  //超出时间限制。。。。
var threeSum1 = function(nums) {
  var first, second = 0;
  var result = [];
  recursion(nums, 3);
  return result;

  function checkIsRepeated(tmpArr){
    for(var i = 0; i < result.length; i++){
      var tmps = [].concat(tmpArr)
      var resultArr = [].concat(result[i]);
      var repeat = 0;
      while(tmps.length > 0){
        var spliceElement = tmps.splice(0,1);
        var resultIndex = resultArr.indexOf(spliceElement[0]);
        if( resultIndex!== -1){
          resultArr.splice(resultIndex, 1)
          repeat++;
        }else{
          break;
        }
      }
      if(repeat === 3){
        return false
      }
    }
    return true

  }
  function recursion(sub, k){
    if(k === 3){
      for(var i = 0; i< sub.length; i++){

        first = sub[i];

        recursion(sub.slice(i+1), k -1)
      }

    }else if(k === 2){
      for(var j = 0; j < sub.length; j++){

        second = sub[j];

        recursion(sub.slice(j+1), k -1)
      }

    }else if(k === 1){
      for(var k = 0; k < sub.length; k++){
        if(first + second + sub[k] === 0){

          var tmpArr = [first, second, sub[k]];
          if(checkIsRepeated(tmpArr)){
            result.push(tmpArr);
          }
          return ;
        }
      }
    }
  }
};
var threeSum = function(nums) {
  function compare(value1, value2){
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
  if(nums.length < 3){
    return [];
  }
  var result = [];
  nums.sort(compare);

  for(var i = 0; i < nums.length; i++){
    var first = nums[i]
    var j = i + 1;
    var k = nums.length - 1;
    if(i > 0 && nums[i] === nums[i-1]){
      continue;
    }
    while(j < k){
      if(nums[j] + nums[k] + first > 0){
        k--;
      }else if(nums[j] + nums[k] + first < 0){
        j++;
      }else{
        result.push([first, nums[j], nums[k]]);
        while(j < k && nums[j] === nums[j+1]){
          j++;
        }
        while(j < k && nums[k] === nums[k-1]){
          k--;
        }
        j++;
        k--;
      }
    }
  }
  return result
}
var result = threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]);
console.log('result',result)
result = threeSum([1,2,-2,-1]);
console.log('result',result)
 result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log('result',result)

