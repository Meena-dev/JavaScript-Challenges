/* write a function that returns the nth 
entry in the Fibonacci sequence, where n is a number
 you pass in as argument to the function 
 Example:
 fibonacci(3)  // --> 2
 */

 function fibonacci(num){
     const result=[0, 1];
     for(let i=2;i<=num;i++){
        const prevnum1=result[i-1];
        const prevnum2=result[i-2];
        result.push(prevnum1+prevnum2);
     }
     return result[num];
 }

 fibonacci(3);