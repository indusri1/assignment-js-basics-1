let password = "%%tfktft%2h"

// if (password.length >= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
//     console.log ('success!')
// } else {
//     console.log("password does not meat the requirements")
// }

if (password === 'password' || password === 'letmein') {
    console.log("can not use this word as password")
}
else if (password.length >= 20) {
    console.log("password exceeds maximum length")
}
else if (password.length >= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
    console.log ('success!')
} 
else {
    console.log("password does not meet the requirements")
}

// Checked for additional checks first so that as soon as the condition is false it can break instead of checking for everything which is time consuming.
// Check for forbidden words (“password”, “letmein”)
// Next, check to see that the password length is not greater than 20 characters.
// Then, checks to see if meets the passowrd requirements of greater than or equal to 10 characters containing a letter and a number. 
// Finally, all other consitions will not meet the requirements