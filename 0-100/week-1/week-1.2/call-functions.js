// The callback function is generally the function we pass as an argument to the function.

function MathOperation(a,b,fcn){
    return fcn(a,b) // fcn is the call back function parameter
    }
    
    function sum(a,b){
    return a+b;
    }
    
    function subtract(a,b){
    return a-b;
    }
    
    console.log(MathOperation(1,2,sum)) //sum is the call back function