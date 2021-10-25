/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sumOfTwoInetegers = (num1, num2) => {
    return num1 + num2
}

console.log(sumOfTwoInetegers(3, 4))


/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const checkIntegers50 = (num1, num2) => {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50 ? true: false
}

console.log(checkIntegers50(25, 25))


/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeCharacterFromString = (string, charPosition) => {
    const string1 = string.substr(0, charPosition)
    const string2 = string.substr(charPosition + 1)
    return string1.concat(string2)
}

console.log(removeCharacterFromString('hello', 3))

/* 4. Create a function to find and return the largest of three given integers. */

const findBiggestNumber = (num1, num2, num3) => {
    return num1 > num2 && num1 > num3 ? num1 : 
    num2 > num1 && num2 > num3 ? num2 : 
    num3 > num1 && num3 > num2 ? num3 : 
    "There isn't a single greatest Number"
}

console.log(findBiggestNumber(5, 4, 5))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

const checkNumbersInRange = (num1, num2) => {
    return ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <=100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <=100)) ? true : false
}

console.log(checkNumbersInRange(50, 70))


/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const createNewString = (string, repeat) => {
    let finalString = ''
    for (let i = 0; i < repeat; i++) {
        finalString = finalString.concat(string)
    }
    return finalString
}

console.log(createNewString('hello', 3))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const displayAddress = (city) => {
    if (city.substr(0, 3) === 'Los' || city.substr(0, 3) === 'New') {
        return city
    }
    return false
}

console.log(displayAddress('New York'))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const numbersArray = [10, 20, 30]

const addNumbersInArray = arr => {
    return arr.reduce((prev, curr) => prev + curr, 0)
}

console.log(addNumbersInArray(numbersArray))


/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

const checkIfArrayContains1Or3 = arr => {
    arr.some((value) => {
        return value === 1
    })
}

console.log(checkIfArrayContains1Or3([2, 4]))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 

const arrayOfStrings = ['hello', 'world', 'longest', 'short']
const findLongestString = arr => {
    let longestStringLength = 0
    let longestString = ''
    arr.forEach(string => {
        if (string.length > longestStringLength) {
            longestStringLength = string.length
            longestString = string
        }
    })
    return longestString
}

console.log(findLongestString(arrayOfStrings))


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const findAngleType = angle => {
    if (angle > 0 && angle < 90) return 'acute'
    if (angle === 90) return 'right'
    if (angle > 90 && angle < 180) return 'obtuse'
    if (angle === 180) return 'straight'
}

console.log(findAngleType(150))

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const findIndexOfGreatestElement = arr => {
    let greatestNum = arr[0]
    arr.forEach(num => {
        if (num > greatestNum) { greatestNum = num }
    })
    return arr.findIndex(element => element === greatestNum)
}

console.log(findIndexOfGreatestElement([10, 52, 33, 44, 21]))


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const randArray = [12, 20, 11, 31, 42, 55]

const findGreatestEvenNumber = arr => {
    const evenNumbers = arr.filter(num => num % 2 === 0)
    let largestNumber = evenNumbers[0]
    evenNumbers.forEach(num => {
        if (num > largestNumber) {largestNumber = num}
    })
    return largestNumber
}

console.log(findGreatestEvenNumber(randArray))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

const postiveAndNegative = (num1, num2) => {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0) ? true : false
}

console.log(postiveAndNegative(-3, -5))


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

const convertStringCase = string => {
    if (string.length <= 3) return string.toUpperCase()
    let lowercase = string.substr(0, string.length - 3)
    lowercase = lowercase.toLowerCase()
    let uppercase = string.substr(string.length - 3, string.length)
    uppercase = uppercase.toUpperCase()
    return lowercase.concat(uppercase)
}

console.log(convertStringCase('Hello'))

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

const calculateSum = (num1, num2) => {
    if ((num1 + num2) >= 50 && (num1 + num2) <= 80) return 65
    return 80
}

console.log(calculateSum(50, 35))


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */