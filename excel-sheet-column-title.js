/**
 * @param {number} columnNumber
 * @return {string}
 * 解题思路
处理进制首先拆分一个数字的组成
比如ABC就是 1 * 26 * 26 + 2 * 26 + 3
那么反推的时候，就是先减去余数，然后除以26，再减去余数，再除以26

放在循环里就出来了，从最后一位到第一位。

这里需要注意两个问题。

第一个问题是什么时候循环出来。发现余数为0时除以26为1，那就是最前面一位了

第二个问题是余数为0的情况。 假如数字是52，表达出来是2 * 26 + 0 还是1 * 26 + 26 ？
答案是后者。
所以余数为0时，要减去26。



作者：chi-cang-que-ji
链接：https://leetcode-cn.com/problems/excel-sheet-column-title/solution/er-shi-liu-jin-zhi-de-chu-li-by-chi-cang-41zm/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
 var convertToTitle = function(columnNumber) {
    let alphaBet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result = []
    while(columnNumber > 0){
        
        var alphaNumber = columnNumber % 26;
        if(alphaNumber === 0){
            alphaNumber = 26;
        }
        var alpha = alphaBet[alphaNumber -1 ];
        result.unshift(alpha);
        columnNumber = columnNumber - alphaNumber
        columnNumber = columnNumber / 26;
        if(alphaNumber === 0 && columnNumber === 1){
            break;
        }
    }
   
    result = result.join('');
    return result;
};