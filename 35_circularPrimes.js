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

//console.log(searchPrimeArrBelowN(100));
//console.log(searchPrimeArrBelowN(1000000));


function generateRotations(num) { // return all rotations of the digits
    const s = String(num);
    const rotations = [];
    for (let i = 0; i < s.length; i++) {
        rotations.push(parseInt(s.slice(i) + s.slice(0, i), 10));
    }
    return rotations;
}

//console.log(generateRotations(245)); // -> [245, 452, 524]

const primeBelowOneMillion = searchPrimeArrBelowN(1000000);
const primeSet = new Set(primeBelowOneMillion);

function isCircularPrime(num, primeSet){ // 循環素数か確認
    const rotations = generateRotations(num);
    return rotations.every(rotation => primeSet.has(rotation));
}

function countNumOfCircularPrimesBelowN(n){
    let count = 0;

    for(let i = 2; i < n; i++){
        if(isCircularPrime(i, primeSet)){
            count++;
        }
    }
    return count;
}


//console.log(countNumOfCircularPrimesBelowN(100)); // -> 13
console.log(countNumOfCircularPrimesBelowN(1000000)); // -> 13