function getUserInfo (firstName, lastName, callback) {
    var name = firstName + ` ` + lastName;
    return callback(name);
}
function greetUser(name) {
    return `Hello, ` + name + `!`
}

console.log(getUserInfo(`Bo`, `Peep`,greetUser))