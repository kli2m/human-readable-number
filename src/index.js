module.exports = function toReadable(number) {
    let str = number.toString()
    let onlyNumber = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let twoNumber = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let twoNumberB = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    function twoDigitNumb(num) {
        let str = num.toString()
        if (num < 10) return onlyNumber[num]
        else if (num < 20) return twoNumber[num - 10]
        else return String(twoNumberB[str[0]] + " " + onlyNumber[str[1]]).trim()
    }

    if (str.length < 3) {
        if (number === 0) return "zero"
        return twoDigitNumb(number)
    } else return String(onlyNumber[str[0]] + " hundred " + twoDigitNumb(Number(str.substr(1)))).trim()
}