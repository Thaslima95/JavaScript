function pattern() {
    let x = "*"
    let str = ""
    for (let i = 1; i <= 5; i++) {
        console.log(`i is ${i}`)
        for (let j = 1; j <= 5 - i; j++) {
            console.log(`j is ${j}`)
            str += " "
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            console.log(k + "first k")
            console.log(i + "first i")
            str += "*"

        }
        str += "\n";

    }
    return str;
}
console.log(pattern())