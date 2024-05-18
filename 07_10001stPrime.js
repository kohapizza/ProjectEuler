// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10001st prime number?

function searchNstPrime(num){
    const primeArr = [2];

    for(let i = 3; primeArr.length < num; i += 2){
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
    console.log(primeArr);
    return primeArr[num - 1];
}

// test
console.log(searchNstPrime(6));

// ans
console.log(searchNstPrime(10001));