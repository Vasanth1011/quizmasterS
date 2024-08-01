// Questions
// const questions = [
//   {
//     question: "What's the output?",
//     code: "function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
//     language: "javascript",
//     correctOption: "3",
//     explanation: "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
//     options: [
//       { text: "Lydia and undefined" },
//       { text: "Lydia and ReferenceError" },
//       { text: "ReferenceError and 21" },
//       { text: "undefined and ReferenceError" }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
//     language: "javascript",
//     correctOption: "2",
//     explanation: "Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example. In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.",
//     options: [
//       { text: "0 1 2 and 0 1 2" },
//       { text: "0 1 2 and 3 3 3" },
//       { text: "3 3 3 and 0 1 2" }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
//     language: "javascript",
//     correctOption: "1",
//     explanation: "Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function. With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example). Since there is no value radius in the scope of the arrow function, this.radius returns undefined which, when multiplied by 2 * Math.PI, results in NaN.",
//     options: [
//       { text: "20 and 62.83185307179586" },
//       { text: "20 and NaN" },
//       { text: "20 and 63" },
//       { text: "NaN and 63" }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "+true;\n!'Lydia';",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "",
//     options: [
//       { text: "1 and false" },
//       { text: "false and NaN" },
//       { text: "false and false" }
//     ]
//   },
//   {
//     question: "Which one is true?",
//     code: "const bird = {\n  size: 'small',\n};\n\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement. mouse[bird.size]: First it",
//     options: [
//       { text: "mouse.bird.size is not valid" },
//       { text: "mouse[bird.size] is not valid" },
//       { text: "mouse[bird[\"size\"]] is not valid" },
//       { text: "All of them are valid" }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "let c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "In JavaScript, all objects interact by reference when setting them equal to each other. First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them.",
//     options: [
//       { text: "Hello" },
//       { text: "Hey!" },
//       { text: "undefined" }
//     ]
//   },
//    {
//     question: "What's the output?",
//     code: "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
//     language: "javascript",
//     correctOption: "2",
//     explanation: "new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object. When we use the == operator (Equality operator), it only checks whether it has the same value. They both have the value of 3, so it returns true. However, when we use the === operator (Strict equality operator), both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.",
//     options: [
//       { text: "true false true" },
//       { text: "false false true" },
//       { text: "true false false" },
//       { text: "false true true" }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));",
//     language: "javascript",
//     correctOption: "3",
//     explanation: "The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.",
//     options: [
//       { text: "orange" },
//       { text: "purple" },
//       { text: "green" },
//       { text: "TypeError" }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as: global.greetign = {} in Node.js window.greetign = {}, frames.greetign = {} and self.greetign in browsers. self.greetign in web workers. globalThis.greetign in all environments. In order to avoid this, we can use 'use strict'. This makes sure that you have declared a variable before setting it equal to anything.",
//     options: [
//       { text: "{}" },
//       { text: "ReferenceError: greetign is not defined" },
//       { text: "undefined" }
//     ]
//   },
//   {
//     question: "What happens when we do this?",
//     code: "function bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects) A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.",
//     options: [
//       { text: "Nothing, this is totally fine!" },
//       { text: "SyntaxError. You cannot add properties to a function this way." },
//       { text: "\"Woof\" gets logged." },
//       { text: "ReferenceError" }
//     ]
//     }
// ]

// const questions = [
//   {
//     question: "What's the output?",
//     code: "function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
//     language: "javascript",
//     correctOption: "3",
//     explanation: "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
//     options: [
//       { text: "Lydia and undefined", questionId: 1 },
//       { text: "Lydia and ReferenceError", questionId: 1 },
//       { text: "ReferenceError and 21", questionId: 1 },
//       { text: "undefined and ReferenceError", questionId: 1 }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
//     language: "javascript",
//     correctOption: "2",
//     explanation: "Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example. In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.",
//     options: [
//       { text: "0 1 2 and 0 1 2", questionId: 2 },
//       { text: "0 1 2 and 3 3 3", questionId: 2 },
//       { text: "3 3 3 and 0 1 2", questionId: 2 }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
//     language: "javascript",
//     correctOption: "1",
//     explanation: "Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function. With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example). Since there is no value radius in the scope of the arrow function, this.radius returns undefined which, when multiplied by 2 * Math.PI, results in NaN.",
//     options: [
//       { text: "20 and 62.83185307179586", questionId: 3 },
//       { text: "20 and NaN", questionId: 3 },
//       { text: "20 and 63", questionId: 3 },
//       { text: "NaN and 63", questionId: 3 }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "+true;\n!'Lydia';",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "The unary plus operator (+) tries to convert its operand into a number. In this case, it converts true to 1. The logical NOT operator (!) converts its operand to a boolean value and then negates it. In this case, 'Lydia' is a non-empty string which is truthy, so !'Lydia' becomes false.",
//     options: [
//       { text: "1 and false", questionId: 4 },
//       { text: "false and NaN", questionId: 4 },
//       { text: "false and false", questionId: 4 }
//     ]
//   },
//   {
//     question: "Which one is true?",
//     code: "const bird = {\n  size: 'small',\n};\n\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement. mouse[bird.size]: First it evaluates bird.size, which is 'small'. So it becomes mouse['small'], which is valid.",
//     options: [
//       { text: "mouse.bird.size is not valid", questionId: 5 },
//       { text: "mouse[bird.size] is not valid", questionId: 5 },
//       { text: "mouse[bird[\"size\"]] is not valid", questionId: 5 },
//       { text: "All of them are valid", questionId: 5 }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "let c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);",
//     language: "javascript",
//     correctOption: "0",
//     explanation: "In JavaScript, all objects interact by reference when setting them equal to each other. First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them.",
//     options: [
//       { text: "Hello", questionId: 6 },
//       { text: "Hey!", questionId: 6 },
//       { text: "undefined", questionId: 6 }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
//     language: "javascript",
//     correctOption: "2",
//     explanation: "new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object. When we use the == operator (Equality operator), it only checks whether it has the same value. They both have the value of 3, so it returns true. However, when we use the === operator (Strict equality operator), both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.",
//     options: [
//       { text: "true false true", questionId: 7 },
//       { text: "false false true", questionId: 7 },
//       { text: "true false false", questionId: 7 },
//       { text: "false true true", questionId: 7 }
//     ]
//   },
//   {
//     question: "What's the output?",
//     code: "class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));",
//     language: "javascript",
//     correctOption: "3",
//     explanation: "The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.",
//     options: [
//       { text: "orange", questionId: 8 },
//       { text: "purple", questionId: 8 },
//       { text: "green", questionId: 8 },
//       { text: "TypeError", questionId: 8 }
//     ]
//     },
// ]

// const questions = [

//     {
//     question: "What's the output?",
//     code: "function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
//     language: "javascript",
//     correctOption: "3",
//     explanation: "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
//         options: {
//        create:[
//       { text: "Lydia and undefined"},
//       { text: "Lydia and ReferenceError"},
//       { text: "ReferenceError and 21" },
//                 { text: "undefined and ReferenceError" }
//        ]
//     }
//   },
//   {
//     question: "What's the output?",
//     code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
//     language: "javascript",
//     correctOption: "2",
//     explanation: "Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example. In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.",
//         options: {
//       create:[
//       { text: "0 1 2 and 0 1 2"},
//       { text: "0 1 2 and 3 3 3"},
//      { text: "3 3 3 and 0 1 2"}
//       ]
//     }

//   },
// ]

const questions = [
    {
    question: "What's the output?",
    code: `
+true;
!'Lydia';
`,
    language: "javascript",
    correctOption: "1",
    explanation: `The unary plus tries to convert an operand to a number. true is 1, and false is 0.
    
The string 'Lydia' is a truthy value. What we're actually asking, is "Is this truthy value falsy?". This returns false.`,
    options: {
      create: [
        { text: "1 and false" },
        { text: "false and NaN" },
        { text: "false and false" }
      ]
    }
  },
]

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
    for (let question of questions) {
        await prisma.question.create({
            data : question
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect()
})
