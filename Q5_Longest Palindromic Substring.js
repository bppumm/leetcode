/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    //const sAry = Array.from(s).join('&')
    let strAry = []
    let pushflag = false
    let strIndex = 0
    let str = ''
    const leng = s.length
    
    if(leng <= 1){
        return s
    }
    if(leng === 2 && s[0] !== s[1]){
        return s[0]
    }
    
    for(let i = 0; i < leng - 1; i++){
        pushflag = true
        for(let j = i+1; j < leng; j++){
            if(pushflag === true){
                str = s[i] + s[j]
                strIndex = 0
                pushflag = false
            }else{
                str = strAry[strIndex] + s[j]
            }
            strAry.push(str)
            strIndex = strAry.length - 1

        }
    }
    let filterAry = strAry.filter(function(element, index, arr){
        return arr.indexOf(element) === index;
    });

    let finalAry = []
    filterAry.forEach(e => {
        if(palindromic(e)){
            finalAry.push(e)
        }
    })
    
    function palindromic(string){
        const sLength = string.length
        const middleNum = Math.floor(sLength / 2)
        for(let i = 0; i < middleNum; i++){
            if(string[i] !== string[sLength - 1 - i]){
                //console.log(string,'false')
                return false
            }else{
                if(i === middleNum - 1){
                    //console.log(string,'true')
                    return true
                }
            }
        }
    }
    
    if(finalAry.length === 0){
        return s[0];
        console.log(s[0])
    }else{
        finalAry.sort((a , b) => b.length - a.length)
        return finalAry[0];
        console.log(finalAry[0])
    }
    //console.log(finalAry)
    
};

let s = "babad"
longestPalindrome(s)