const accountID = 12545
let accountEmail = "email@example.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not a good way to diclare variable -- very very bad practice

let accountState; // only diclare variable and assign value which is why it is known as undefined

/*
prefer not to use var 
because of issue in block scope and function scope
*/

// changing variables and checking there mutability
// accountID = 23 // not allowed
accountEmail = "umar@tanwar"
accountPassword = "67890"
accountCity = "Delhi"


console.log(accountID, accountEmail, accountPassword, accountCity)

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])


