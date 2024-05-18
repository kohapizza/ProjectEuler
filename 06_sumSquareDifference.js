//The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)^2 = 55^2 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
//3025 - 385 = 2640
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares(num){
    let ans_sumOfSquares = 0;

    for(let i = 1; i<=num; i++){
        ans_sumOfSquares += i**2;
    }

    return ans_sumOfSquares;
}

function squaresOfSum(num){
    let sumOfNum = 0;

    for(let i = 0; i<=num; i++){
        sumOfNum += i;
    }

    return sumOfNum**2;

}

// ans
console.log(squaresOfSum(100) - sumOfSquares(100)); // -> 25164150