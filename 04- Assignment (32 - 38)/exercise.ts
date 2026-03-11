// abstract class Character {
//   constructor(
//     public username: string,
//     public level: number,
//   ) {}
//   abstract attack(): void;
//   abstract defend(): void;
//   abstract specialSkill(): void;
// }

// class Warrior extends Character {
//   constructor(username: string, level: number) {
//     super(username, level);
//   }
//   attack() {
//     console.log(
//       `${this.username} is attacking with a sword!, Level: ${this.level}`,
//     );
//   }
//   defend() {
//     console.log(
//       `${this.username} is defending with a shield!, Level: ${this.level}`,
//     );
//   }
//   specialSkill() {
//     console.log(
//       `${this.username} is using the special skill: Berserk!, Level: ${this.level}`,
//     );
//   }
// }

// let warriorOne = new Warrior("Conan", 50);
// let warriorTwo = new Warrior("Xena", 45);
// console.log(warriorOne);
// console.log(warriorTwo);
// warriorOne.attack();
// warriorTwo.defend();
// warriorOne.specialSkill();

// // ========== Separator ==========

// abstract class Payment {
//   constructor(
//     public amount: number,
//     public currency: string,
//   ) {}
//   abstract pay(): void;
//   abstract refund(): void;
//   abstract getFees(): number;
//   printReceipt() {
//     console.log(`Payment Receipt => Amount: ${this.amount} Currency: ${this.currency}`);
//   }
// }

// class CreditCardPayment extends Payment {
//   constructor(amount: number, currency: string) {
//     super(amount, currency);
//     super.printReceipt();
//   }
//   pay(): void {
//     console.log(`Paid ${this.amount} using Credit Card`);
//   }
//   refund(): void {
//     console.log(`Refund sent back to Credit Card`);
//   }
//   getFees(): number {
//     return this.amount * 0.02;
//   }
// }

// class PaypalPayment extends Payment {
//   constructor(amount: number, currency: string) {
//     super(amount, currency);
//     super.printReceipt();
//   }
//   pay(): void {
//     console.log(`Paid ${this.amount} using Paypal Account`);
//   }
//   refund(): void {
//     console.log(`Refund sent to Paypal Wallet`);
//   }
//   getFees(): number {
//     return this.amount * 0.03;
//   }
// }

// class CashPayment extends Payment {
//   constructor(amount: number, currency: string) {
//     super(amount, currency);
//     super.printReceipt();
//   }
//   pay(): void {
//     console.log(`Paid ${this.amount} using Cash`);
//   }
//   refund(): void {
//     console.log(`Customer received cash refund`);
//   }
//   getFees(): number {
//     return this.amount * 0.01;
//   }
// }

// let userOne = new CreditCardPayment(100, "USD");
// let userTwo = new PaypalPayment(200, "EUR");
// let userThree = new CashPayment(50, "USD");

// let users: Payment[] = [];
// users.push(userOne, userTwo, userThree);

// for (let payment of users) {
//   payment.pay();
//   console.log(payment.printReceipt());
//   console.log(`Fees: ${payment.getFees()}`);
//   payment.refund();
//   console.log("-------------------");
// }

// ========== Separator ==========
// Exercise | Generic Types - Part 1

// // function returnValue<T>(value: T): T {
// //   return value;
// // }

// const returnValue = <T>(value: T): T => value;

// console.log(returnValue<string>("Elzero"));
// console.log(returnValue<number>(100));
// console.log(returnValue<boolean>(true));

// ========== Separator ==========
// Exercise | Generic Types - Part 2

// function getFirstElement<T>(value: T[]): T {
//   if (!value.length) {
//     throw new Error("Array is Empty");
//   }
//   return value[0]!;
// }

// const getFirstElement = <T>(value: T[]): T => value[0]; // Error because strictNullChecks is enabled, value[0] can be undefined if the array is empty
// const getFirstElement = <T>(value: T[]): T => value[0]!; // ! Non-null assertion operator
// const getFirstElement = <T>(value: T[]): T | undefined => value[0];

// console.log(getFirstElement<number>([10,20,30])); // 10
// console.log(getFirstElement<string>(["A", "B"])); // A

// ========== Separator ==========
// Exercise | Generic Types - Part 3

// function mergeData<A, B>(valueOne: A, valueTwo: B): string {
//   return `${valueOne} - ${valueTwo}`;
// }

// console.log(mergeData("Level", 100));

// ========== Separator ==========
// Exercise | Generic Interface - Part 4


interface User<T> { 
  id: number;
  data: T;
}

let user1: User<string> = {
  id: 1,
  data: "Developer",
};

console.log(user1); 

let user2: User<number> = {
  id: 2,
  data: 100,
};

console.log(user2);

// // ========== Separator ==========
// // Exercise | Generic Class - Part 5

// class Box<T extends object> { // T extends object => T must be an object type
//   constructor(public content: T) { }
//   show() : void {
//     console.log(this.content)
//   }
// }

// let box1 = new Box({name: "Ahmed", age: 30});
// box1.show();

// let box2 = new Box({ "score": 200 });
// box2.show();