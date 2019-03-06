//Nouns adjective and verbs
// basic data types
//'abc' "abc" 'abc' // strings
//10 //numbers
    /// ====> Int, Float
//true false //booleans
//null undefined /// no value to them for variables

//NaN /// Not a number

//{} // Object nouns
// [] // arrays lists
// Jared
const jared = {
    height: 511,
    weight: '180',
    eyeColor: 'Blue',
    age: 35,
    birthday: 'November',
    isMale: true,
    isFemale: false,
    livesInUSA: true,
    address:{
        street: 'Hi',
        city: 'Herriman',
            state: 'Utah',
            zipCode: '11111'
    },
myFavoriteFoods: ['Pizza' ,`Steak` ,`Salad`],
myFamilyMembers=[
    {
        name:'Ashlee',
        age: 31,
        relationship:'Spouse'
    },
    {
        name:'Coleson',
        age: 8,
        relationship:'Son'
    }
]


/// variables
// var /// es5
// let // es6 can change what it points to
// const // es6 can never change the address


console.log(jared)  

//const myFunc = function() {
//}; //es5

//const myOtherFunc = () => {

//}; //es6

const myFunc = function() {
    const differenceInAge = jared.age - myFamilyMembers[0].age;
};
console.log(myFunc());
console.log(myFamilyMembers[0].age)


const add = function(num1, num2) {
    return num1 + num2 + 10
}; //es5

const myVar = add(1,2);

console.log(myVar)

// function expression   const variable = function() {

//}

//function declaration function myFunc(){

//}

// arrow function  const arrow = () => {}

const arrow = () => {
    var myVariable = ''
    function innerFunction() {
        apple = 3
    }
}

const addPositive = function(num1, num2) {
    if(num1 > num2){
        return num1 - num2;
    }else{
        return num2 - num1
    }
}; //es5

// > greater
// && both have to be tru
// || either or have to be true
// === equal to
// !== not equal to

// function lives in an object it's called a method
