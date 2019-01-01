//朋友圈

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  function initArray(M){
    array = new Array(M.length);
    height = new Array(M.length);

    for(var i = 0; i< array.length; i++ ){
      array[i] = -1;
      height[i] = 1;
    }
    return array;
  }
  //root1:根的下标
  //root2:子节点的下标
  function union(root1, root2){
    var rootX = findRoot(root1);
    var rootY = findRoot(root2);
    if(rootX !== rootY){
      //优化，按树的高度优化，比较两颗子树长短，将短的那颗记录长的那颗的位置
      if(height[rootX] > height[rootY]){
        array[rootY] = rootX;
      }else if(height[rootY] > height[rootX]){
        array[rootX] = rootY;
      }else{
        array[rootX] = rootY;
        height[rootY]++;
      }
    }
  }
  //找到所在的根
  function findRoot(x){
    while(array[x] !== -1){
      x = array[x];
    }
    return x;
  }
  //寻找朋友圈个数，即根的个数
  function getGroupNumber(){
    for(var i = 0; i < array.length; i++){
      if(array[i] === -1){
        numbers ++;
      }
    }
    return numbers;
  }
  var numbers = 0;
  var array,height;

  initArray(M);

  for(var i = 0; i < M.length; i++){
    var rows = M[i];
    for(var j = 0; j < rows.length; j++){

      if(i !== j){
        //有好友关系
        if(rows[j] === 1){
          //并查集查找根
          union(i, j)
        }

      }
    }
  }
  return getGroupNumber();
};
var result = findCircleNum(
  [
    [1,1,0,0,0],
    [1,1,1,0,0],
    [0,1,1,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]
  ]
);
// result = findCircleNum(
//   [
//     [1]
//   ]
// );
console.log('result',result)