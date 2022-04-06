// for (let i = 2; i<= 20; i += 2) {
//     console.log(i);
// }

// for (let b = 1; b<=6; b++) {
// console.log("testing")
// }
// // coding excercise 31
// // Print out "Da ba dee da ba daa" 6 times, using a for loop
// for (let c = 1; c<= 6; c++) {
//     console.log("da ba dee da ba daa");
// }

// for (let d = 10; d <= 1000; d += 10) {
//     console.log(d)
// }
// // Coding excercise 32
// for (let z = 25; z>=0; z -= 5){
//     console.log(z);
// }

// // 194. Looping Over Arrays
// const animals = [ 'Lions', 'Tigers', 'Bears'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }


// // coding excercise 33: Iterating Arrays Excercise
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // let people = people.toUpperCase;

// for (let i = 0; i < people.length; i++) {
//     console.log(i, people[i].toUpperCase())
// }
// people.forEach(name => console.log(name.toUpperCase()))


// for (let d = 10; d <= 1000; d *= 10) {
//     console.log(d) 
//     }

// for(let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for(let j = 1; j < 4; j++) {
//         console.log(`    j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
//     ]

//     // console.log(seatingChart)

//     // for (let i = 0; i < seatingChart.length; i ++){
//     //     console.log(seatingChart[i])
//     // }


//     for (let i = 0; i < seatingChart.length; i++) {
//               const row = seatingChart[i];
//               console.log(`row #${i + 1}`)
//                 for(let j = 0; j < row.length; j++) {
//                 console.log(row[j]) 
//             }
//            }
// //  196

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const secret = "1115";

// let guess = prompt("Enter the secret");
// while (guess !== secret) {
//     guess = prompt("try again");
// }
// console.log("congrats")

// let input = prompt("Hi, say something")
// while(true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }

// // I'm going to try writing this out a few times until i get it right first time
// let input = prompt("prompting you")
// let input = prompt("prompting you")
// let input = prompt("prompting you")
// let input = prompt('prompting you')
// let input = prompt('prompting you')
// let input = prompt("prompting you")
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// let input = prompt("prompting you")
// while(true){

// }
// while(true){
//     input = prompt(input);
// }

// let input = prompt("prompting you")
// while(true) {
//     input = prompt(input);
// }

// let input = prompt("say something")
// while(true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("You Win")

// if (input.toLowerCase() === "quit it") break;
// if (input.toLowerCase() === "quit it") break;
// if (input.toLowerCase() === "quit it") break;


// I'm going to try writing it out from scratch with no looking 

// let input = prompt("Enter Me")
// while(true) {
//     if (input.toLowerCase() === "me") break;
//     input = prompt(input);
    
// }
// console.log("Yes, you.")


// let input = prompt("let's see if I can do this off the top of my noggin")
// while(true) {
//     if(input.toLowerCase() === "yes you can") break;
//     input = prompt(input);
// }
// console.log("Well done!!!")

// let maximum = parseInt(prompt("Enter your max number"));
// if(!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

//Here's the max loop

// let maximum = parseInt(prompt("Enter your max number"));
// while(!maximum) {
//     maximum = parseInt(prompt("Please enter a valid number"));
// }    
// //Here's the targetNum generator

// const targetNum = Math.floor(Math.random() * maximum) + 1; 
// console.log(targetNum)

// //Here's the guess prompt

// let guess = parseInt(prompt("Guess the random number"));

// //Here's the while, if, else loop

// while (guess !== targetNum){
//    if (guess > targetNum) {
//        guess = parseInt(prompt("Too high! Enter a new guess:"));
//    } else {
//        guess = parseInt(prompt("Too low! Enter a new guess"));
//    }
// }
// console.log("Correct!")


// let maximum = parseInt(prompt("Enter your max number"));
// while(!maximum) {
//     maximum = parseInt(prompt("Please enter a valid number"))
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum)
// // working so far

// let guess = parseInt(prompt("Guess your number"));
// let attempts = 1;

// while(parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = (prompt("Lower!"));
//     } else {
//         guess = (prompt("Higher!"));
//     }
// }
// if (guess === 'q') {
//     console.log("you quit")
// } else {
//     console.log(`Correct. Well Done! It took you ${attempts} attempt/s`)
// }


// 199 For...Of loops

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

// for (let i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (sub of subreddits) {
//     console.log(`visit reddit.com/r/${sub}`);
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
//     ]

//     for (let row of seatingChart) {
//         for (let student of row) {
//             console.log(student);
//         }
//     }

//     for (let char of "hello world") {
//         console.log(char)
//     }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
// }

// // for(let person in testScores) {
// //     console.log(`${person} scored ${testScores[person]}`);
// // }

// // for(let score of Object.values(testScores)) {
// //     console.log(score);
// // }

// // let total = 0;
// // for(let score of Object.values(testScores)) {
// //     total += score;
// //     console.log(total)
// // }

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)

let userInput = prompt('What would you like to do')
const todos = ['code', 'clean room', 'gym'];
while (userInput !== 'quit' && userInput !== 'q') {
    if(userInput === 'list') {
        console.log('*************')
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*************')
    } else if (userInput === 'new'){
            const newTodo = prompt('ok, what is the new todo');
            todos.push(newTodo);
            console.log(`${newTodo} added to the list`)
    } else if (userInput === 'delete'){
            const index = parseInt(prompt('okay, enter an index to delete;'));
            if (!Number.isNaN(index)) {
            const deleted = todos.splice(index,1)
            console.log(`${deleted} deleted`)
        } else {
            // parseInt(prompt('enter a valid number;'));
            console.log('enter valid index')
        }
    }
        userInput = prompt('What would you like to do')
}
console.log('okay, you quit')