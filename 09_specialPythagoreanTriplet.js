// (1000 - a)(1000 - b) = 500,000 (= 2^5 * 5^6)

function searchPythagoreanTriplet(){
    let a, b , c = 0;
    for(let i2 = 0; i2 <= 5; i2++){
        for(let j5 = 0; j5 <= 6; j5++){
            a = 1000 - (2**i2)*(5**j5);
            b = 1000 - (2**(5-i2))*(5**(6-j5));
            if(a<b && a>0 && b>0){
                console.log("a: " + a + " b: " + b + " i2: " + i2 + " j5: " + j5);
                c = 1000 - a - b;
                return a*b*c;
            }
        }
    }

}
    
//console.log(searchPythagoreanTriplet()); -> 31875000


function searchPythagoreanTriplet2(){
    let a, b , c = 0;
    for(let i = 1; i < 1000; i++){
        for(let j = 1; j<1000; j++){
            a = i;
            b = j;
            c = 1000 - i - j;
            if((c**2 === a**2 + b**2) && a < b){
                console.log("a: " + a + " b: " + b + " c: " + c);
                console.log(a*b*c);
                return a*b*c;
            }
        }
    }
}

searchPythagoreanTriplet2();