//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

function searchLargestPrimeFactor(num){
    let largestPrimeFactor = 1;
    const primeArr = []; //既に持つprime factorsを格納していく
    for(let i=2; i<num; i++){
        if(num%i === 0){
            // prime factorか確認
            let checkPrimeFacArr = primeArr.map((primeFac) => i%primeFac);
            if(!checkPrimeFacArr.includes(0)){
                primeArr.push(i);
            }
        }
    }
    largestPrimeFactor = primeArr[primeArr.length - 1];
    return largestPrimeFactor;
}

// test
//console.log(searchLargestPrimeFactor(10)); // -> 5
//console.log(searchLargestPrimeFactor(39)); // -> 13

// この計算終わらない
//console.log(searchLargestPrimeFactor(600851475143)); // ->  ?



function searchLargestPrimeFactor2(num){
    let largestPrimeFactor = 1;

    //あとで楽になるように先に2でわれるだけ割っておく
    while(num%2 === 0){
        largestPrimeFactor = 2;
        num /= 2;
    }

    for(let i=3; i<=Math.sqrt(num); i += 2){
        while(num%i === 0){
            largestPrimeFactor = i;
            num /= i;
        }
    }

    // numが素数
    if(num > 1){
        largestPrimeFactor = num;
    }
    
    return largestPrimeFactor;
}

// test
console.log(searchLargestPrimeFactor2(10)); // -> 5
console.log(searchLargestPrimeFactor2(39)); // -> 13

// answer
console.log(searchLargestPrimeFactor2(600851475143)); // -> 6857