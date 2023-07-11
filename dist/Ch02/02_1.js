"use strict";
// 2.2.1 変数宣言
const greeting = "Hello, ";
const target = greeting;
console.log(greeting + target);
// 2.2.2 識別子
const あいう = 123;
const 技術評論社 = あいう + 876;
console.log(技術評論社);
// 2.2.3 型注釈
const left_hand_side = "Hello, ";
const right_hand_side = "World!";
console.log(left_hand_side + right_hand_side);
// 2.2.4 letによる変数宣言と変数への再代入
let lhs = "Hello, ";
let rhs = "World!";
lhs = lhs + rhs;
console.log(lhs + rhs);
