//given an array ,the output should be alternate sums
function alternatingSums(array) {
    let evenSum = 0;
    let oddSum = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
            evenSum += array[i];
        } else {
            oddSum += array[i];
        }
    }
    
    return [evenSum, oddSum];
}


const nums = [50, 60, 60, 45, 70];
const result = alternatingSums(nums);

// log
console.log("result: ", result);
