function getUserInfo (firstName, lastName, callback) {
    var name = firstName + ` ` + lastName;
    return callback(name);
}
function greetUser(name) {
    return `Hello, ` + name + `!`
}

console.log(getUserInfo(`Bo`, `Peep`,greetUser))


let num1 = '12' 
console.log(Number(num1));


function addTen( arr ) {
    var newArr = [];
   
for( var i = 0; i < arr.length; i++ ) {
    newArr.push(Number(arr[i]) + 10);
  }
  
  return newArr;
}

console.log(addTen([10, '20', 30]));