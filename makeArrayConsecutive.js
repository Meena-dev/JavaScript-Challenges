//given an array ,returns total missing numbers between smallest and largest number

function makeArrayConsecutive(nums) {
    let count = 0;
    const sortedNums = nums.sort();
    const min = nums[0];
    const max = nums[nums.length - 1];
    
    for(let i = min; i < max; i++) {
        if(!nums.includes(i)) {
            count++;
        } 
    }
    
    return count;
}

const nums = [6, 2, 3, 8];
const result = makeArrayConsecutive(nums);
console.log("result: ", result);