"use strict";
// abstract class Character {
//   constructor(
//     public username: string,
//     public level: number,
//   ) {}
//   abstract attack(): void;
//   abstract defend(): void;
//   abstract specialSkill(): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    id: 1,
    data: "Developer",
};
console.log(user1);
let user2 = {
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
//# sourceMappingURL=exercise.js.map