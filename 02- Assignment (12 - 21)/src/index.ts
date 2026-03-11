// Part 1
// type n = number;

// Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

// // ========== Separator ==========

// // Part 2
// type mix = number | boolean;

// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

// // ========== Separator ==========

// // Part 3

// type Info = {
//   theName: string,
//   theAge: number
// }

// // Do Not Edit Here
// function showInfo(data: Info) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));

// type Full = Info & {
//   country: string
// }

// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// ========== Separator ==========

// Part 4

// type Result = ("True" | "False" | "Error");

// function yesOrNo(val: number | string) : Result {
//   if (typeof val === "string") {
//     return "Error";
//   }
//   else return val > 10 ? "True" : "False";
// }

// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False

// ========== Separator ==========

// Part 5

// type custom = "Yes" | "No" | "Error";

// function isHeOld(age: number | string) : custom {
//   if (typeof age === "string") {
//     return "Error";
//   }
//   else {
//     return age > 40 ? "Yes" : "No";
//   }
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"

// ========== Separator ==========

// Part 6
// let post: readonly[number, string, boolean]; // => declare a tuple type

// // post = [100, 200, "Title"]; // Error
// // post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good => Assignment (إسناد قيمة)

// // post.push("Elzero"); // Error => Can't Add

// // Create Destructuring Here
// let [id, title, state] = post

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true

// ========== Separator ==========

// Part 7

// Create Enums + Function Here
// enum Game {
//   Easy = 100,
//   Medium = Easy - 20,
//   Hard = Medium - (Easy / 2),
// }

// a function with same enum prop
// function Insane(num: number): number {
//   return Game.Hard - num
// }

// enum ≠ functions ❌
// define property ❌
// Assignment ❌
// how can I use Insane with a parameter? ❌
// Game.Insane = (num: number) : number => num - Game.Hard // Error => Can't Define Function Inside Enum because it readonly

// Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Insane(10)); // 20
// ========== Separator ==========

// Part 8

const user: {
  username: string;
  age: number | string;
  website?: string;
  skills: {
    frontEnd: string[];
    backEnd: (string | number)[];
  };
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"],
  },
};

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

console.log(user.username)
console.log(user.age);
console.log(user.skills.backEnd);