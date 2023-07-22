/**
 * クラス由来でないJavaScript独自のオブジェクト(3)
 * スプレッド構文
 * 別のオブジェクトから[プロパティ:式]をコピーできる
 */

{
    const obj1 = {
        bar: 456,
        baz: 789,
    };

    const obj2 = {
        foo: 123,
        ...obj1,
    };

    // obj2は { foo: 123, bar: 456, baz: 789 }
    console.log(obj2);
}

// 後に定義したプロパティ：式が採用される
{
    const obj1 = {
        foo: 123,
        bar: 456,
        baz: 789,
    };

    const obj2 = {
        ...obj1,
        foo: -999,
    };

    // obj2は { foo: -999, bar: 456, baz: 789 }
    console.log(obj2);
}

// ...obj1よりも前にfoo:-999を置くのはコンパイルエラー
{
    const obj1 = {
        foo: 123,
        bar: 456,
        baz: 789,
    };

    const obj2 = {
        // foo: -999, // エラー
        ...obj1,
    };
}

{
    const obj1 = {
        foo: 123,
        bar: 456,
    };

    const obj2 = {
        bar: -999,
        baz: -9999,
    };

    const obj3 = {
        ...obj1,
        ...obj2,
    };

    console.log(obj3);
}