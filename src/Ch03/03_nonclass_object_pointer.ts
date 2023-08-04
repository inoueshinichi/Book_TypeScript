/**
 * 複数の変数が同じオブジェクトを参照する
 * TypeScriptではオブジェクトが暗黙的にコピーされることはなく,
 * 複数の変数(やオブジェクトのプロパティ)に同じオブジェクトが入る場合がある
 * C/C++のポインタ的挙動をする
 */

// 同一参照
{
    const foo = { num: 1234 };
    const bar = foo;
    console.log(bar.num); // 1234
    foo.num = 0;
    console.log(bar.num); // 0
}

// スプレッド構文を用いてオブジェクトをコピ-
{
    const foo = { num: 1234 };
    const bar = { ...foo };
    console.log(foo.num); // 1234
    bar.num = 0;
    console.log(foo.num); // 1234
}

// スプレッド構文によるコピーは, ネストしたオブジェクトに注意
{
    const foo = { obj: { num: 1234 } };
    const bar = { ...foo };
    bar.obj.num = 0;
    console.log(foo.obj.num); // 0
}

// ネストしたオブジェクトもスプレッド構文でコピーすれば, ある程度の範囲までは全コピー可能
{
    const foo = { obj: { num: 1234 } };
    const bar = { obj: { ...foo.obj} };
    console.log(foo.obj.num); // 1234
    bar.obj.num = 0;
    console.log(foo.obj.num); // 1234
}

// 一致判定演算子===を用いたオブジェクトの判定は,
// 同じオブジェクトならばtrue, それ以外はfalseを返す
{
    const foo = { num: 1234 };
    const bar = foo;
    const baz = { num: 1234 };
    console.log(foo === bar); // true
    console.log(foo === baz); // false
}

