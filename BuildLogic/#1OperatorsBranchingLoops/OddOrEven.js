// Write a program to take a number input from user and determine whether the number is odd or even.

const readlineSync = require('readline-sync')

const question = readlineSync.question("Enter a number")

if(question%2===0)
{
    console.log(`The number ${question} is even`)
}
else{
    console.log(`The number ${question} is odd`)
}

