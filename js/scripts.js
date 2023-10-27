// Business Logic

function countUp(num) {
    const numArray = []
    let i = 0
    while (i <= num) {
        numArray.push(i)
        i++
    }
    return numArray;
}

function numberReplacer(num) {
    const digitArray = num.toString().split('')
    if (digitArray.includes("3")) {
        return "Won't you be my neighbor?"
    }
}