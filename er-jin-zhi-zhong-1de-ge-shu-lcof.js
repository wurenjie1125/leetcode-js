
/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * 起初想把输入的数字转成字符串，然后数1，然后发现没这么简单。
JS中普通数字转字符串是可以的。但是二进制转字符串会出现点问题。
于是参考官方写法
由于最多32位数字。我们遍历1到32.
对于某位是否为1。我们只要将数字和2^i的二进制做与操作。
比方说
1101 & 0001 ， 1101 & 0010 ，1101 & 0100.
然后根据与的结果是0就知道那一位是0还是1了。

作者：chi-cang-que-ji
链接：https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/solution/jsjie-ti-er-jin-zhi-zhong-yi-de-ge-shu-b-eqv4/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
 var hammingWeight = function(n) {
    let res = 0
    for(let i = 1; i <= 32; i++){
        if( (n &  (1<<i)) !== 0  ){
            res = res + 1;
        }
    }
    return res;
};