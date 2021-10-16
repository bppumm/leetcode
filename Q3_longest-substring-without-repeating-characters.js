//3. Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.
// @param {string} s
// @return {number}

var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return(0)
    }

    let strAry = [] //紀錄不重複字串
    let lengthAry =[] //紀錄字串長度

    for(let i=0; i < s.length; i++){
        let str = s[i]
        if(strAry.includes(str) === true){
            lengthAry.push(strAry.length)
            let strIndex = strAry.indexOf(str) + 1
            strAry = strAry.slice(strIndex)
        }
        strAry.push(str)
        if(i === s.length - 1)lengthAry.push(strAry.length)
    }

    lengthAry.sort((a,b) => b - a)
    return(lengthAry[0])

};