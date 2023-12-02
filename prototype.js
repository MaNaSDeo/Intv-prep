let nameStr = 'Manas Deo'
let nameObj = {
    first_name: 'Manas',
    last_name: 'Deo'
}
// console.log(nameObj);
// console.log(nameObj.prototype);

const nameArr = ['Manas', 'Deo']
// console.log(nameArr)
// console.log(nameArr.prototype)

function multiply5(num){
    return num*5;
}
multiply5.power = 2;
multiply5.apple = 2;

// console.log(multiply5(5));
// // console.log(multiply5.power);
// // console.log(multiply5.apple);
// console.log(multiply5.prototype);

// console.log(Object.getPrototypeOf(nameObj)); // [Object: null prototype] {}
// console.log(Object.getPrototypeOf(nameArr)); // []
// console.log(Object.getPrototypeOf(multiply5)); // [Function]

function creatUser(username, score){
    this.username = username;
    this.score = score;
}

creatUser.prototype.increment = function(){
    this.score++;
}

creatUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new creatUser('chai', 25);
const tea = new creatUser('tea', 250);

// chai.printMe();
// chai.increment();
// chai.printMe();
// console.log(chai);

// ------------------------------------------------------------------------------------------------------------------

let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'web',

    getSpiderPower: function(){
        // console.log(`Spidy power is ${heroPower.spiderman}`); // -> Spidy power is web
        // console.log(`Spidy power is ${spiderman}`); // -> Error
        console.log(`Spidy power is ${this.spiderman}`); // -> Spidy power is web
    }
}

// heroPower.getSpiderPower();

Object.prototype.manas = function(){
    console.log(`Manas is Everywhere! Ha Ha Ha!`);
}

Array.prototype.heyManas = function(){
    console.log(`I'm here as well!`)
}

// heroPower.manas();
// nameArr.manas();
// nameArr[0].manas();

// heroPower.heyManas(); // -> Error - object
// nameArr.heyManas(); 
// nameArr[0].heyManas(); // -> Error -string under array
// nameStr.heyManas(); // -> Error -string

// Inheritance

const user = {
    name: 'egg roll',
    email: 'eggRoll@mutton.com'
}

const nonVeg = {
    isNonVeg: true,
}

const eggNeeded = {
    isEggNeeded: true,
}

// console.log(user);
// console.log(nonVeg);
// console.log(eggNeeded);

const rollEater = {
    favourite: 'mutton roll',
    __proto__: user,
}
console.log(rollEater.name)