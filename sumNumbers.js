//Sum of all numbers regardless of parameters

function add(...nums) {
    //  write code here.
    var sum=0;
    nums.forEach((item)=>{sum += item})
    return sum;
}

//add(num1, num2, num3);
//add(num1, num2);