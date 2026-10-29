//Tuple example
/*
const person: {
    name: string;
    age: number;
    role: [number, string]
} = {
// const person = {
    name: "chitresh",
    age: 28,
    role: [2, "author"]
}

person.role.push(4);
// person.role[1] = false;
// person.role = ["hi", "bye", "go", 4]
person.role = [9, "bye"]
console.log(person.role);
*/

// Enum example
/*
enum Role{Admin, Author, User}
const person = {
    name: "chitresh",
    age: 28,
    role: Role.User
}

let anyType: any;
anyType = ["hello", 4, false]
console.log(anyType);
*/

/**
 * function and types
 */
/* function add(n1: number, n2: number): number{
    return n1+n2;
}
let combineValue: Function;
// let combineValue: (n1: number, n2: number) => number;
combineValue = add;
console.log(combineValue(2, 4));
 */

/**
 * callback
 */
/* 
function add(n1: number, n2: number, cb: (response) => void){
    return cb(n1 + n2);
}

add(3, 4, (res) => {
    console.log(res);
    return true;
})
 */

/**
 * unknown Type
 */
/* let userInput: unknown;
let userName: string;

userInput = 'chitresh';
if (typeof userInput === 'string'){
    userName = userInput;
} */

/**
 * never type
 */
/* function generateError(message: string, code: number): void{
    throw { message: message, errorCode: code};
}

generateError('server error', 500); */

