/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

let Password="Midtermsarehard"
let userInput= "WhateverUserSubmits"

if (Password===userInput) {
    console.log("Access Granted!") 
    } else if(userInput==="forgot"){
    console.log("Here is a hint") 
    } else if(userInput==="reset"){
    console.log("Let's reset your account")
    } else{console.log("Access Denied!")
}

//*I will be putting comments here, and be using reference to the lines of the code.*// 
//*(16,17) I set the parameter of the password to be "Midtermsarehard" (this is up to me, the person coding). I let the paramter of the user input to be hypothetically set to "WhateverUserSubmits" because it allows the code to be run all the way through.*//
//*The order of the conditionals is important. (19) The first 'if' is the most evident, if the user puts in the same string as the password set up in the let statement above, then the output will say they were granted access*//
//*(21)the first 'else if' says that if the user input isn't the same as the password AND the user input was 'forgot' then the output says it gives the user a hint.*//
//*(23)the second 'else if' says that if the user input and password isn't the same AND the user input isn't 'forgot' AND the user input is 'reset', then the output will be 'let's reset your account'*//
//*(25)finally, the 'els'e says that if none of the conditions above are met, then access is denied to the user. This order allows the code to only give the 'access denied' output when all other options have been exhausted*//
//*thank you so much, and hope you had a great vacation and Halloween!*//


