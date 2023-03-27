function add(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
        throw new Error("Array of numbers is not an array")
    }

    //preferred way
    for (var i in arrayOfNumbers) {
        var num = arrayOfNumbers[i]
    }

    //convenient way if value and index are needed
    arrayOfNumbers.map((value, index) => {
        console.log(value, index)
    })

    var result = 0

    //INDEX NOT NEEDED.. WE ARE USING THIS.
    arrayOfNumbers.map(value => {
        if (isNaN(value)) {
            console.error(value, "is not a number..")
            return
        }
        result = result + value
    })

    return result

}

const myNumbers = [1,5,10,25,150]
var total = add(myNumbers)
console.log(total)