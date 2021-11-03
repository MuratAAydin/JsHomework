function divisor(num) {
    let divisor = 0
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisor = divisor + i;
        }
    }
    return divisor
}

function isFriendly(num1, num2) {
    return divisor(num1) === num2 && divisor(num2) === num1;
}
console.log(isFriendly(220, 284))
