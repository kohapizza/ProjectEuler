//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//remainder : 余り
//1-20の最小公倍数


function searchSmallestMultiple1to20(){
    // 1 = 1            11 = 11
    // 2 = 2            12 = 2^2 * 3
    // 3 = 3            13 = 13
    // 4 = 2^2          14 = 2 * 7
    // 5 = 5            15 = 3 * 5
    // 6 = 2 * 3        16 = 2^4
    // 7 = 7            17 = 17
    // 8 = 2^3          18 = 3^2 * 2
    // 9 = 3^2          19 = 19
    // 10 = 2 * 5       20 = 2^2 * 5

    // ans = 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19

    //20以下の素数リスト
    const primeUnder20Arr = [2, 3, 5, 7, 11, 13, 17, 19];

    let smallestMultiple1to20 = 1;

    const maxOrders = primeUnder20Arr.map((prime) => {
        let maxOrder = 0; //最高次数
        let nprime = prime; //prime^n

        while(20 >= nprime){
            maxOrder ++;
            nprime *= prime;
        }

        return maxOrder;
    });

    // console.log(maxOrders);

    for(let i = 0; i<primeUnder20Arr.length; i++){
        smallestMultiple1to20 *= (primeUnder20Arr[i] ** maxOrders[i]);
    }

    return smallestMultiple1to20;

    
}

console.log(searchSmallestMultiple1to20());