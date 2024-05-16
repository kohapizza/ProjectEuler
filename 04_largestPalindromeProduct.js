// A palindromic number reads the same both ways.
//　The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.



function isPalindromic(num){
    let isPalind = true;

    const num_len = String(num).length;

    for(let i = 0; i<num_len/2; i++){
        if(String(num)[i] !== String(num)[num_len - 1 - i]){
            return false;
        }
    }
    return isPalind;
}

// test
console.log(isPalindromic(101));
console.log(isPalindromic(1200));

// my wrong answer

function searchLargestPalindrome(){
    const palindromeArr = [];
    for(let i = 100; i<1000; i++){
        for(let j = 100; j<1000; j++){
            if(isPalindromic(i*j)){
                palindromeArr.push(i*j);
            }
        }
    }
    return palindromeArr[palindromeArr.length - 1];
}

// point
// 1. 別にループが続くにつれてi*jが大きくなっていくわけではない
// 2. この方法だとi*jもj*iも計算してしまっている
// 3. 全回文数を配列に保存する必要はない


// my correct answer
function searchLargestPalindrome2(){
    let largestPalindrome = 0;
    for(let i = 999; i>99; i--){
        for(let j = i; j>99; j--){
            if((isPalindromic(i*j)) && (largestPalindrome < i*j)){
                largestPalindrome = i*j;
            }
        }
    }
    return largestPalindrome;
}

//answer
console.log(searchLargestPalindrome2());