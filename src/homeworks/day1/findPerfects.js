function divisor(num) {
    let divisor = 0
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisor = divisor + i;
        }
    }
    return divisor + num
}

function findPerfects(num) {
    let perfectNums = []
    for (let i = 6; i <= num; i++) {
        if (i * 2 === divisor(i)) {
            perfectNums.push(i)
        }
    }
    return perfectNums
}

console.log(findPerfects(1000))
