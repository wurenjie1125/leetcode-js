//无重复字符的最长子串

var lengthOfLongestSubstring = function(s) {
  var substring = "";
  var maxLength = 0;
  for(var i=0;i<s.length;i++){
    //遍历字符串，如果该字符在子串中找到,则往窗口加入字符
    if(substring.indexOf(s[i]) === -1){
      substring += s[i];
      maxLength = substring.length > maxLength ? substring.length : maxLength;
    }else{
      //窗口左边往右移
      substring = substring.substr(1);
      i--;
    }
  }
  return maxLength;
};
var length = lengthOfLongestSubstring('abcabcbb');
console.log('length',length)
length = lengthOfLongestSubstring('bbbbb');
console.log('length',length)
length = lengthOfLongestSubstring('pwwkew');
console.log('length',length)
length = lengthOfLongestSubstring('ab');
console.log('length',length)
length = lengthOfLongestSubstring(' ');
console.log('length',length)
