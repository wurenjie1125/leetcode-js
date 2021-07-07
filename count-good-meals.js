/**
 * @param {number[]} deliciousness
 * @return {number}
 * 首先暴力双重循环超时了。
然后翻看答案，琢磨半天也不是太懂，先抄了。
这个hashMap记录的value颇有点DP的味道。
然后遍历2 到 数组中2的最大值，通过相减来查找是否存在这个值，也非常巧妙，很难想到。

 */
 var countPairs = function(deliciousness) {
    let count = 0;
    let hashMap = new Map();
    let maxVal = 0;
    //寻找数组中最大值
    for (const val of deliciousness) {
        maxVal = Math.max(maxVal, val);
    }
    //由于两数相加，最大值不超过乘以2
    const maxSum = maxVal * 2;

    for(let i = 0; i < deliciousness.length; i++){
        let num = deliciousness[i];
        //遍历 1、 2、 4、 6、8 ... maxSum
        for(let j = 1; j <= maxSum; j <<= 1){
            //寻找map里是否存在这个符合的值
            const val = hashMap.get(j - num) || 0;
            //累加
            count = (count + val) % (Math.pow(10,9) + 7);
        }
        //map存值累加
        hashMap.set(num, (hashMap.get(num) || 0) + 1);

        
    }
    return count   
};
const res = countPairs([1,1,1,3,3,3,7]);
console.log('res',res);