//字符串数组的最长公共前缀
//平均 76ms

var longestCommonPrefix = function(strs) {
  //过滤特殊情况
  if(strs.length === 0){
    return ""
  }
  var minLength = strs[0].length;
  var minIndex = 0;
  var prefix = "";
  var tmp_split = "";

  //获取长度最短的元素
  for(var i =1; i<strs.length-1; i++){
    if(strs[i].length < minLength){
      minLength = strs[i].length;
      minIndex = i;
    }
  }
  if(strs[minIndex] === ""){
    return "";
  }
  //遍历最短元素的每个字符
  for(var i= 0; i<strs[minIndex].length; i++){
    tmp_split += strs[minIndex][i];
    //和数组中其他字符串对比
    for(var j = 0; j< strs.length; j++) {
      //和其他元素进行对比，自己除外
      if(j === minIndex){
        continue;
      }
      //如果对比的截取前缀不等于遍历字符，则结束
      if(strs[j].substr(0, tmp_split.length) !== tmp_split){
        return prefix;
      }
    }
    //若全部存在，则赋值
    prefix = tmp_split;
  }
  //如果数组中只有一个的情况
  return prefix;
};
var prefix = longestCommonPrefix(["c","acc","ccc"]);
console.log('prefix',prefix)
 prefix = longestCommonPrefix(["dog","racecar","car"]);
console.log('prefix',prefix)
prefix = longestCommonPrefix(["flower","flow","flight"]);
console.log('prefix', prefix)
