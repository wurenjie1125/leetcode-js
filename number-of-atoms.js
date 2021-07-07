/**
 * @param {string} formula
 * @return {string}
 * 这道题可以使用**从后往前遍历**的方法。
遇到数字记录，当遇到右括号的时候，将其与栈顶部数字相乘，并压入栈中。遇到左括号，出栈。
遇到大写字母时，将栈顶部数字的值与未压入栈的记录的数字相乘，并赋予原子。
需要注意大小写字母的连续记录以及数字的连续记录。
数据使用obj存储。
最后按照字典顺序重排并输出
 */
var countOfAtoms = function(formula) {
    //记录各个原子的值
    let dict = {}
    //栈中初始数字。用于表示单个原子的数字情况
    let stack = [1]
    //原子名
    let str = ''
    //暂且记录的原子数字情况，压入栈或者消耗后要重置。
    let count = 1;
    //从后往前遍历。
    for(let i = formula.length - 1; i >= 0; i-- ){
        const value = formula[i];
        //如果是数字。则记录
        if(!isNaN(value)){
            if(count === 1){
                count = value
            }else{
                count = parseInt(value + count)
            }
        };
        //如果是小写字母，则记录
        if(value >= 'a' && value <= 'z'){
            str = str + value;
        }
        //如果是右括号，则将记录的数字和栈顶部数字相乘并输出
        if(value === ')'){
            stack.push(stack[stack.length - 1] * count);
            count = 1;
        }
        //如果是左括号，则出栈
        if(value === '('){
            stack.pop();
        }
        //如果是大写字母，则将栈顶的值赋值给该原子。如果字典里有这个原子，则累加。重置临时记录的数字和原子值
        if(value >= 'A' && value <= 'Z'){
            let atomsValue = count * stack[stack.length-1];
           
            str = value + str;
            if(dict[str] === undefined){
                dict[str] = atomsValue;
            }else{
                dict[str] = dict[str] + atomsValue
            }
            count = 1;
            str = '';
        }
    }
    //按照字典排序
    let newkey = Object.keys(dict).sort();
    var result = {};//创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        result[newkey[i]] = dict[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
    //按照要求的格式输出。
    let resultString = ''
    for(var key in result){
        resultString = resultString + key;
        if(result[key] > 1){
            resultString = resultString + result[key];
        }
    }
    return resultString

    

};
const res = countOfAtoms('Mg(OH)2');