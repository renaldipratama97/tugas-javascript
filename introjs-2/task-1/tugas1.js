// No 1 (Method Concat) => Array
const pemrogramanWeb = ['PHP', 'Javascript']
const pemrogramanAndroid = ['Java', 'Kotlin']
const pemrograman = []
const result = pemrograman.concat(pemrogramanWeb, pemrogramanAndroid)
console.log(result)

const language = ['PHP', 'Javascript', 'Java', 'Kotlin', 'Ruby', 'Swift', 'Flutter']

// No 2 (Method indexOf) => Array
const result1 = language.indexOf('Javascript')
console.log(result1)

// No 3 (Method arrayIsArray) => Array
const result2 = Array.isArray(language)
console.log(result2)

// No 4 (Method valueOf) => Array
const result3 = language.valueOf()
console.log(result3)


const string = 'Bootcamp Arkademy'
// No 5 (Method search) => String
const resultString1 = string.search('A')
console.log(resultString1)

// No 6 (Method toString) => String
const resultString2 = string.toString()
console.log(resultString2)

// No 7 (Method toLowerCase) => String
const resultString3 = string.toLowerCase()
console.log(resultString3)

// No 8 (Method toUpperCase) => String
const resultString4 = string.toUpperCase()
console.log(resultString4)

const number = 23.567
// No 9 (Method toFixed) => Number
const resultNumber1 = number.toFixed(1)
console.log(resultNumber1)

// No 10 (Method replace) => String
const resultString = string.replace("Arkademy", "Mantap")
console.log(resultString)