//复原IP地址
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var result = [];
  var isValid = function(s){
    if(s.length > 3 || s.length < 1){
      return ;
    }
    if(parseInt(s) > 255){
      return ;
    }
    if(s.length > 1 && s[0] === '0'){
      return ;
    }
    return true
  };

  var dfs = function(s,k, out){

    for(var i = 1; i <= 3; i++){
      if(k === 1){
        if(!isValid(s)){
          return ;
        }
        var res = out + s;
        result.push(res);
        return ;
      }
      if(k !== 1){
        //截取第K段的字符串
        var substrs = s.substr(0,i);
        //剩下的字符串进入递归
        var restStrs = s.substr(i);
        //每一段的校验，需要注意02这样的非法地址
        if(!isValid(substrs)){
          return ;
        }
        //递归，减去一份长度
        dfs(restStrs, k - 1, out + substrs + '.');
      }
    }
  };
  dfs(s, 4, "");
  return result;
};
result = restoreIpAddresses("010010")
console.log('result',result)
