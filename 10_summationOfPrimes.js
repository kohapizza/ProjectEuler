// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

function searchPrimeArrBelowN(num){
    const primeArr = [2];

    for(let i = 3; i <= num; i += 2){
        let isPrime = true;
        for(let j = 0; j<primeArr.length; j++){
            if(i%primeArr[j] === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeArr.push(i);
        }
    }
    return primeArr;
}

// test
console.log(searchPrimeArrBelowN(10));

function findSumPrimesBelowN(num){
    const primeArrBelowN = searchPrimeArrBelowN(num);
    let sum = 0; // ans

    for(let i = 0; i<primeArrBelowN.length; i++){
        sum += primeArrBelowN[i];
    }

    return sum;
}

// test
console.log(findSumPrimesBelowN(10));

// ans
console.log(findSumPrimesBelowN(2000000)); // -> 142913828922