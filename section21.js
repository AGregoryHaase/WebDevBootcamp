let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

// let bird = 'Scarlet Macaw' ;
//     function birdWatch() {
//     let bird = 'Great Blue Heron' ;
// }
// birdWatch();
// console.log(bird) ;

// let bird = 'Scarlet MAcaw';
// function birdWatch() {
//     console.log(bird)
//     }


// // block example
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIIII!'
// }
// console.log(radius)
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     var msg = 'aeraerarv';
//     console.log(msg)
// }
// console.log(msg)
    
function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Poopman']
    function cryForHelp(){
            function inner () {
                for (let hero of heroes) {
                    console.log(`Please Help Us, ${hero.toUpperCase()}`)
        }
    }
    inner();
}
cryForHelp();
}

function add(x,y){
    return x + y;
}

// const square = function (num) {
//     return num * num;
// }
// square(7)

const add2 = function(x,y){
    return x * y;
}

function callTwice(func) {
    func();
    func();
}

function laugh(){
    console.log("hahahahahahaha")
}
callTwice(laugh)

function rollDie(){
    let roll = Math.floor(Math.random() * 6) +1
    console.log(roll)
}

callTwice(rollDie)

function callTenTimes(f){
    for (let i = 0; i < 10; i++)
    f()
}
callTenTimes(rollDie)



//  Section 215.

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc(0,18); 



function makeMysteryFunction() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log('Congrats!')
        }
    } else {
    return function() {
        alert("Sorry, it's a no.")
        }
    }
}
const mystery = makeMysteryFunction();
mystery();

function isBetweenFunc(num) {
    return num >= 50 && num <=100;
}
 

function isBetween2(num){
    return num >=0 && num <=10;
}

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function () {
//         return num ** 3;
//     }
// }

const square = {
    area: function (side) {
        return side * side;
    },
    perimeter: function(side) {
        return side * 4;
    }
}


// Codewars
// two memberships: Senior and Open.
// senior = +55 years && handicap greater than 7
// handicap range -2 to +26
// So how do we create the range? 
// OKay, forget the range, just do the senior and else everything else

// function membership(age, handicap){
//     if (age > 55 && handicap > 7){
//     return ('Senior');
// } else {
//     return (Open)
// }
// }
// const senior = function()


const hen = {
    name: 'Helen',
    eggCount: '0',
    layAnEgg() {
        return `${this.eggCount} EGG`
    }
}


function yell(msg){
    console.log(msg.toUpperCase().repeat(3));
}