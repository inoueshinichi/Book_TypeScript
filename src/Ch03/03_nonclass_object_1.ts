/**
 * クラス由来でないJavaScript独自のオブジェクト(1)
 * 連想配列(dict)
 */

import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

{
    const obj = {
        foo: 123,
        bar: "Hello, World!"
    };

    console.log(obj.foo);
    console.log(obj.bar);
}

// プロパティ名と変数名が同じ場合の省略記法
rl.question('文字列を入力してください:', (input) => {

    // const user = {
    //     name: input ? input : "名無し",
    //     age: 20,
    // }

    const name = input ? input : "名無し";
    const user = {
        name,
        age: 20,
    }

    console.log(`${user.name} が出力です`);
    rl.close();
});

// プロパティ名に文字列リテラルを使用する
{
    const obj = {
        "foo": 123,
        "foo bar": 456,
    };

    console.log(obj.foo);
    console.log(obj["foo bar"]); // 456
}

// プロパティ名に数値リテラルを使用する
{
    const obj = {
        1: "one",
        2.05: "two point o five",
    };

    console.log(obj[1]);
    console.log(obj[2.05]);
    console.log(obj["1"]);
    console.log(obj["2.05"]);
}

