/**
 * @param {string} s
 * @return {number}
 * 解题思路
遍历累加，处理下数字为减得情况。
我们可以看到IV这种数字的特征就是小的数字在前面，而通常罗马数字都是从大到小的特征的。
所以比较当前一位和下一位，就可以得到该数值的正负号。

作者：chi-cang-que-ji
链接：https://leetcode-cn.com/problems/roman-to-integer/solution/luo-ma-shu-zi-by-chi-cang-que-ji-zcrq/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
 var romanToInt = function(s) {
    var res = 0;
    function getValue(char){
        switch(char){
            case 'I':
            return 1;
            case 'V':
            return 5;
            case 'X':
            return 10;
            case 'L':
            return 50;
            case 'C':
            return 100;
            case 'D':
            return 500;
            case 'M':
            return 1000
        }
    }
    for(let i = 0; i<s.length; i++){
      var value = getValue(s[i]);
      if(i !== s.length - 1){
        var nextValue = getValue(s[i+1]);
        if(value < nextValue){
            value = -value;
        }
      }
      res = res + value;

    }
    return res;

    
};