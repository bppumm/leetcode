//Q1. Two Sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var sum = 0;
    var result = [];
    for(var i=0; i<=nums.length; i++){
        for(var j=i+1; j<=nums.length; j++){
            sum = nums[i] + nums[j];
            if( sum == target){
                result = [i,j]
                return result;
            }
        }
    }
};