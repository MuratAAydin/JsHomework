function finsPrimes(num) {
    let primes = []
    for (let i = 1; i <= num; i++) {
        let c = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                c = false
                break;
            }
        }
        if(c){
            primes.push(i)
        }
    }
    return primes;
}
console.log(finsPrimes(1000))
