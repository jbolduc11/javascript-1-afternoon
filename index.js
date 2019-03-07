// // Nouns adjective and verbs.

// ///Basic Data Types
// 'abc' "abc" `abc` ///strings
// 10 //numbers
//     /// ====> Int, Float 
// true false //booleans

// null undefined /// Valueless 

// NaN /// Not A Number. 

// {} //Object nouns
// [] //arrays lists 

// Josh
const josh = {
    height: `5'11`,
    weight: '180',
    eyeColor: 'blue',
    age: 26,
    birthday:'11/05/1992',
    email:'veryjoshua@gmail.com',
    isMale: true,
    isFemale: false,
    livesInUSA: true,
    address:{
        street: '6020 roseate spoonbill Drive',
        city: 'Windermere',
          state: 'Florida',
          ZipCode: '34786'
    },
    myFavoriteFoods:[`Pizza`, `Steak`, `Tamales`, `pozole`],
    myFamilyMembers:[
        {
            name:'Lauren',
            age: 22,
            relationship:'Spouse'
        },
        {
          name:'Eli',
          age: 1,
          relationship:'Child'
      },
    ],
    addPostive: function(num1, num2) {
          if(num1 > num2){
              return num1 - num2;
          }else{
              return num2 - num1
          }
      }, 
  }
  
  // > greater than
  // < less than
  // === equal to 
  // !== not equal to
  // && both condition have to be true
  // || either or have to be true. 
  
  
  
  
  
  console.log(josh.addPostive(1,2))
  // const name = 'josh';
  // const isTrue = false;
  // const age = 26
  // const arr = [
  //     [1,2,3],
  //     [4,5,6],
  //     [7,8,9]
  // ];
  // const dan = {
  //     isAmazingProgrammer: true,
  // }
  
  // const inSideArr = arr[2]
  
  // console.log(inSideArr[1])
  
  // /// variables 
  // var //es5
  // let // es6 let me change what it points to. 
  // const //es6 constant 

// shift alt copy multiple lines

Falsy
const stuff = null;
const stuff1 = undefined;
const stuff2 = 0;
const stuff3 = false;
const stuff4 = ``;
const stuff5 = NaN;

all other statements are truthy

// command d highlights all the same word

const name = 'josh'
switch(age + 10){
    case josh :
        console.log("Hello josh");
        break;
    case 'Dan'
        console.log("Welcome Dan");
        break;
    default:
        console.log("We don't know you");
        break;
}

const name = 'joshua'

if(name === 'josh'){
    console.log("Hello josh");
}else if(name === 'dan'){
    console.log("Welcome Dan");
}else{
    console.log("We don't know you");
}

switch(name){
    case 'josh' : 
        console.log("Hello josh");
        break;
    case 'Dan' :
        console.log("Welcome Dan");
        break;  
    default: 
        console.log("We don't know you");
        break;
}

// ternary statements

//Ternary

const ageIsGreaterThanOne = (age) => {
    if(age > 0){
        return true;
    }else{
        return false;
    }
}

const ageIsGreaterThanOne2 = (age) => {
    return age > 0 ? true : false;
}

console.log(ageIsGreaterThanOne2(-1))

// dynamic data
const josh = {
    height: `5'11`,
    weight: '180',
    eyeColor: 'blue',
    age: 26,
    birthday:'11/05/1992',
    email:'veryjoshua@gmail.com',
    isMale: true,
    isFemale: false,
    livesInUSA: true,
    address:{
        street: '6020 roseate spoonbill Drive',
        city: 'Windermere',
          state: 'Florida',
          ZipCode: '34786'
    },
    myFavoriteFoods:[`Pizza`, `Steak`, `Tamales`, `pozole`],
    myFamilyMembers:[
        {
            name:'Lauren',
            age: 22,
            relationship:'Spouse'
        },
        {
          name:'Eli',
          age: 1,
          relationship:'Child'
      },
    ],
    addPostive: function(num1, num2) {
          if(num1 > num2){
              return num1 - num2;
          }else{
              return num2 - num1
          }
      }, 
  }
  
  const num = 0
  const name = `myFamilyMembers`
  
  console.log(josh.myFavoriteFoods)
  console.log(josh.myFavoriteFoods[num])
  console.log(josh[name])



  // arrays
  // push end of the array
  // unshift begining of array

  console.log(josh.myFavoriteFoods)
  josh.myFavoriteFoods.push('tacos')
  console.log(josh.myFavoriteFoods)
  josh.myFavoriteFoods.unshift('watermelon')
  console.log(josh.myFavoriteFoods)
  josh.myFavoriteFoods[0] = "Chicken Nudgets";
  console.log(josh.myFavoriteFoods)

  //loops 
  for

  console.log(josh.myFavoriteFoods);
console.log(josh.myFavoriteFoods.length);

const doesThisPersonLikePizza = (arr) => {
    let answer = false;
    console.log(arr)

    for(let i = 0; i < arr.length; i++){

        console.log(i)
        if(arr[i] === "Pizza"){
            answer = true;
        }
    }

    return answer;
}

console.log(doesThisPersonLikePizza(josh.myFavoriteFoods))


const doesThisPersonLikePizza2 = (arr) => {
    let answer = false;
    console.log(arr)
    console.log(arr.length)

    let i = 0;
    
    while(i < arr.length){
        console.log(i)
        if(arr[i] === "Pizza"){
            answer = true;
        }
        i++
    }

    return answer;
}


console.log(doesThisPersonLikePizza(josh.myFavoriteFoods))
console.log(doesThisPersonLikePizza2(josh.myFavoriteFoods))