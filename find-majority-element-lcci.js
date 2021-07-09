/**
 * @param {number[]} nums
 * @return {number}
 * 速度还是可以的
![image.png](https://pic.leetcode-cn.com/1625818983-gJfoNx-image.png)
前几天做那个餐饮的给了我很多启示。遇到类似的从数组里相同的归类的，都可以用hashMap来存累加值。
然后遍历hash表中取超过数组长度一般的值就够了
 */
 var majorityElement = function(nums) {
    let dict = {}
    for(let i = 0; i < nums.length; i++){
        let val = nums[i]
        dict[val] =  dict[val] ? dict[val] + 1 : 1
    }
    console.log('dict',dict);
    
    for(let key in dict){
        if(dict[key] >= (parseInt(nums.length / 2) + 1)){
            return key
        }
    }
    return -1
};
const res = majorityElement([3,2,3])
console.log('res',res)