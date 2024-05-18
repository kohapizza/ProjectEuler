// n番目のフィボナッチ数
// function fibonacci(n){
//     if(n === 1){
//         return 1;
//     }else if(n === 2){
//         return 1;
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// test
//console.log(fibonacci(12)); // -> 144

function searchIndexofdigits(digit){
    let index = 2;
    let fibonacci = 1;
    let beforeFibonacci = 1;
    for(let i = 1; String(fibonacci).length < digit; i++){
        index++;
        let tmp_fibonacci = fibonacci;
        fibonacci += beforeFibonacci;
        beforeFibonacci = tmp_fibonacci;
        //console.log("index: " + index + " fibonacci: " + fibonacci);
    }
    return index;
}

// test
console.log(searchIndexofdigits(3)); // -> 12
//console.log(searchIndexofdigits(1000)); // -> 終わらん