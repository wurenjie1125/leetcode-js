/**
 * @param {number[][]} points
 * @return {number}
 * 
 * 判断每两个点是否组成同一条直线，只需要计算直线的斜率即可。两点斜率公式为k = y2-y1/x2-x1。
由于每两个点之间都需要比较。所以需要用二重循环。
由于1/0 的斜率和-1/0都处在同一条线上，不像+0和-0。所以这个情况要额外处理下。
用Object保存值。每次二层循环中累加同一斜率的次数，并且和之前保存的最大的值相比较。

作者：chi-cang-que-ji
链接：https://leetcode-cn.com/problems/max-points-on-a-line/solution/jsji-suan-duo-shao-ge-dian-zai-tong-yi-x-yiwe/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

 var maxPoints = function(points) {
    let max = 1;
    for(let i = 0; i < points.length; i++){
        let kMap = {}
        for (let j = i+1; j < points.length; j++){
            let dy = points[j][1] - points[i][1];
            let dx = points[j][0] - points[i][0];
            let k = (dy * 1.0)/dx;
            if(k === -Infinity){
                k = Infinity
            }
            if(kMap[k] !== undefined){
                kMap[k] = kMap[k] + 1
            }else{
                kMap[k] = 2
            }

            max = Math.max(max,kMap[k])

        }
       
    }
   
    return max
    
    
};