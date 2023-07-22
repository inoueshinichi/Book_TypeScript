/**
 * プリミティブ型の暗黙の型変換
 */
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question('文字列を入力してください:', (line) => {
//     console.log(`${line} が入力されました`);
//     rl.close();
// });

// rl.question('文字列を入力してください:', (line) => {

//     const result = line + 1000; // 型推論

//     console.log(`${result} が出力です`);
//     rl.close();
// });

// rl.question('数値を入力してください:', (line) => {
//     const num = Number(line);
//     const result = num + 1000; // 型推論

//     console.log(`計算結果は, ${result} です`);
//     rl.close();
// });


// // 数値型以外からの数値型への変換
// {
//     const num1 = Number(true);
//     console.log(num1); // 1

//     const num2 = Number(false);
//     console.log(num2); // 0

//     const num3 = Number(null);
//     console.log(num3); // 0

//     const num4 = Number(undefined);
//     console.log(num4); // NaN
// }




