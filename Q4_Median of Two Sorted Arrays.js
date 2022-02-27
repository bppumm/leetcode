/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let numAry1 = nums1
    let numAry2 = nums2
    numAry2.forEach(e => {
        numAry1.push(e)
    })
    numAry1.sort((a,b) => a - b)
     
    let arylength = numAry1.length
    if(arylength === 1){
        return numAry1[0]
    }else if(arylength % 2 === 0){
        let m2 = arylength / 2
        let m1 = m2 - 1
        return (numAry1[m1] + numAry1[m2]) / 2
    }else if(arylength % 2 === 1){
        let m = (arylength - 1) / 2
        return numAry1[m]
    }

};