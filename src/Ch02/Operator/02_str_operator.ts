/**
 * 文字列の演算子
 */
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('名前を入力してください:', (name) => {
    console.log("こんにちは、" + name + "さん");

    // 文字列連結時に文字列に変換される
    console.log('foo' + true);
    console.log(null + 'foo');

    rl.close();
});