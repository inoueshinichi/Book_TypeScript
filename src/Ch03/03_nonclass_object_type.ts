/**
 * オブジェクトの型
 */

// オブジェクトの型構文とリテラル構文
{
    const obj: {
        foo: number,
        bar: string,
    } = {
        foo: 123,
        bar: 'Hello, World!',
    };
    console.log(obj);
}

// プロパティ名に文字列リテラルを使用する
{
    const obj: {
        'foo bar': number,
    } = {
        'foo bar': 123,
    };
    console.log(obj);
}

// type文で型に別名をつける(C/C++のtypedef)
{
    type FooBarObj = {
        foo: number;
        bar: string;
    };

    const obj: FooBarObj = {
        foo: 123,
        bar: "Hello, world!"
    };

    type UserId = string;
    const id: UserId ='inoue';
    console.log(id);
}

// 型の伝搬
{
    type FooObj = { foo: number };
    type MyObj = FooObj;

    const obj: MyObj = { foo: 0 };
    console.log(obj);
}

// interface宣言でオブジェクト型を作る
// オブジェクト型だけに別名をつけることができる
{
    interface FooBarObj {
        foo: number;
        bar: string;
    }

    const obj: FooBarObj = {
        foo: 0,
        bar: "string",
    };

    console.log(obj);
}

// インデックスシグネチャ
// どんな名前のプロパティも受け入れるという性質のオブジェクト型を記述できる
{
    type PriceData = {
        [key: string]: number;
    }

    const data: PriceData = {
        apple: 220,
        coffee: 120,
        bento: 500,
    };

    // これはOK
    data.chicken = 250;
    // これはコンパイルエラー
    // data.弁当 = "foo"; // numberじゃない

    console.log(data);
}

// インデックスシグネチャの罠
{
    type MyObj = { 
        [key: string]: number;
    };

    const obj: MyObj = { foo: 123 };
    const num: number = obj.bar; // barプロパティはないはず. undefinedが戻り値
    // undefinedと表示される
    console.log(num);

    // 動的プロパティ
    const propName : string = "foo";
    // insは{ [x: string]: number }型
    const ins = {
        [propName]: 123,
    };

    console.log(ins.foo); // 123と表示される
}

// オプショナルなプロパティの宣言
{
    type MyObj = {
        foo: boolean;
        bar: boolean;
        baz?: number;
    };

    const obj: MyObj = {
        foo: false,
        bar: true,
    };
    const obj2: MyObj = {
        foo: true,
        bar: false,
        baz: 1234,
    };

    console.log(obj.baz); // undefined
    console.log(obj2); // 1234
}

// 読み取り専用プロパティ
{
    type MyObj = {
        readonly foo: number;
    };

    const obj: MyObj = {
        foo: 12345,
    };

    // obj.foo = 0; // エラー
}