
// let message: string = "Hello, TypeScript!";
// console.log(message);

//Basic Types
let temperature: number =25;
let welcomeMessage: string = "Welcome";
let isLoggedIn: boolean = false;

//Arrays and Tuples
let  colors: string[] = ["blue","white","pink"];
let userInfo : [string, number] = ["user1", 20]; 

//Enum, Any, Void, Null, and Undefined
enum Season {Spring, Summer, Autumn,Winter};
let s: Season = Season.Winter;

let logValue: any = 4;
logValue = "return ";

function noReturn(): void {
    console.log("No return");
}

let u: undefined = undefined;
let n: null = null;

//Function
function greet(x: string, y: string): string {
    return x + y;
}
function multiply(x: number, y: number): number {
    return x + y;
}

//Optional and Default Parameters
function createEmail(to: string, subject?: string): string {
    if (subject) return to + " " + subject;
    else return to;
}

function add(x: number, y : number,z ?: number): number {
    if (z !== undefined) {
        return x + y + z;
    } else {
        return x + y;
    }
}
//Rest Parameters
function concatenateStrings(...strings: string[]): string {
    return strings.join('');
}
function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers);
}
//Interfaces
interface Vehicle {
    make: string;
    model: string;
    year?: number; 
    
}

function createVehicle(person: Vehicle) {
return person;
}

interface Person{
    firstName: 'Johny',
    lastName: 'John',
    email?:string;
}


function updatePerson(person:Person){
    let update={
        email:"xxxxx@mail.com"
    };
}

//Readonly Properties
interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

let moveCircle: Circle = { centerX: 2, centerY: 10,radius:1 };



//Classes
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal{
    move(distanceInMeters: number = 10) {
        console.log(`Dog moved ${distanceInMeters}m.`);
    }
}
//Public, Private, and Protected Modifiers
class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    public getName():string{
        return this.name;
    }
}

// let person = new Person("sss");
// console.log(person.name);


//Generic
function identity<T>(arg: T): T {
    console.log(typeof(arg));
    return arg;
}

interface GenericIdentityFn<T> {
    (arg: T): T;
}
interface GenericArray<T> {
    items: T[];
}
let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(5)); 

let numberArray: GenericArray<number> = {
    items: [1, 2, 3, 4, 5]
};
console.log(numberArray.items); 

//Enums
enum Responsee{
    No = 0,
    Yes=1,

}
function processResponse(response: Responsee): void {
    if (response === Responsee.No) {
        console.log("Response is No");
    } else if (response === Responsee.Yes) {
        console.log("Response is Yes");
    } else {
        console.log("Invalid response");
    }
}
enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function processResult(result: boolean): Message {
    return result ? Message.Success : Message.Failure;
}
//Advanced Types
function padLeft(value: string, padding: string | number): string {
    if (typeof padding === 'number') {
        return "it's a number";
    } else {
        return "it's a string";
    }
}
//Intersection Types

interface BusinessPartner {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
type Customer = BusinessPartner & Contact;
let myCustomer: Customer = {
    id: 123,
    name: "Example Company",
    email: "example@example.com",
    phone: "123-456-7890"
};
