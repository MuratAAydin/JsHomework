function isPrime(...num) {
    for (let i = 0; i < num.length; i++) {
        let c;
        for (let j = 2; j < num[i]; j++) {
            if (num[i] % j === 0) {
                c = true
                break;
            }
        }
        c ? console.log(`${num[i]} not prime`) : console.log(`${num[i]} prime`)
    }
}

isPrime(5, 3, 6)
