/**
 * @param {string} s
 * @return {string[]}
 * 
 */
 var permutation = function(s) {
    var arrs = s.split('');
    let result = []
    function dfs(x){
        if(x === arrs.length - 1){
            result.push(arrs.join(""));
            return ;
        }
        let dic = [];
        for(let i=x; i < arrs.length; i++){
            if(dic.find(item => item === arrs[i])){
                continue;
            }
            dic.push(arrs[i]);
            let tmp = arrs[i];
            arrs[i] = arrs[x];
            arrs[x] = tmp;
            dfs(x+1);
            tmp = arrs[i];
            arrs[i] = arrs[x];
            arrs[x] = tmp 
        }
    }
    dfs(0);
    return result

};