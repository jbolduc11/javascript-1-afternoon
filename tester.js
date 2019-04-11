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


var countSheep = function (num){
    var sheep = '';
    for( var i=0; i<num; i++) {
        sheep += (i+1) + ' sheep...'
    }
    return sheep
  }

  console.log(countSheep(3));

  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }

    console.log(getPlanetName(2), 'Venus');