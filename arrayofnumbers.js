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
console.log(total);

const obj = {}
obj["moby-dick"] = ["page 1 text.....","page 2 text...."]
obj["another-book"] = ["page 1 text.....","page 2 text...."]
obj["last-book"] = ["page 1 text.....","page 2 text...."]

console.log(myNumbers);
console.log(obj);

console.log(obj["moby-dick"])

for(var pagenumber in obj["another-book"]){
  const page = obj["another-book"][pagenumber]
  console.info("Page Number:",pagenumber,page)
}

obj["moby-dick"].map((page,pagenumber) => {
  console.info("Page Number:",pagenumber,page)
})