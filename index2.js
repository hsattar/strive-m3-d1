/* 1. Given a string (as a parameter), return the character that is most commonly used. */


/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */

const checkIfAnagram = (string1, string2) => {
    let anagram = true
    if (string1.length !== string2.length) return anagram = false
    const string1Letters = string1.split('')
    const string2Letters = string2.split('')
    string1Letters.forEach(letter => {
        const checkString2 = string2Letters.indexOf(letter)
        if (checkString2 < 0) { anagram = false }
    })
    return anagram
}

console.log(checkIfAnagram('olleh', 'hello'))

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */

const isPalindrome = string => {
    const originalString = string
    const letters = string.split('')
    const newStringArray = []
    letters.forEach(letter => newStringArray.unshift(letter))
    const reversedString = newStringArray.join('')
    return (originalString === reversedString)
}

console.log(isPalindrome('hamnah'))

/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 ⇒ 981 */

const reverseNumber = num => {
    const string = num.toString()
    const numArray = string.split('')
    const newArray = []
    numArray.forEach(num => newArray.unshift(num))
    const reversedNumber = newArray.join('')
    return reversedNumber
}

console.log(reverseNumber(189))

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/ 


/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" ⇒ "olleh" */

const reverseString = string => {
    const letters = string.split('')
    const reversedOrder = []
    letters.forEach(letter => {
        reversedOrder.unshift(letter)
    })
    const reversedString = reversedOrder.join('')
    return reversedString
}

console.log(reverseString('hello'))

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 → [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 → [[ 1, 2, 3, 4], [5]]
*/


/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/



/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/