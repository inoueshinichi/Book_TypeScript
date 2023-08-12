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

// typeof キーワード
{
    // typeof 変数名 で型名がわかる
    {
        const num: number = 0;
        type T = typeof num;
        const foo: T = 123;
        console.log(foo);
    }
    
    // 型推論の結果をtypeofで抽出する
    {
        const obj = {
            foo: 123,
            bar: "hi"
        };
        type T  = typeof obj;
        const obj2 : T = {
            foo : -50,
            bar : ""
        };
        console.log(obj2);
    }

    // 値が最上位に来るパターン
    {
        const commandList = ["attack", "defend", "run"] as const;

        // "attack" | "defend" | "run" 型
        type Command = typeof commandList[number];
    }
}

// 部分型関係
{
    // FooBarBaz型はFooBar型の部分型
    // FooBarBaz型はFooBar型を内包している
    {
        type FooBar = {
            foo : string;
            bar : number;
        };

        type FooBarBaz = {
            foo : string;
            bar : number;
            baz : boolean;
        };

        const obj : FooBarBaz = {
            foo : "hi",
            bar : 1,
            baz : false,
        };
        const obj2 : FooBar = obj;
    }

    // Animal型とHuman型
    {
        type Animal = {
            age : number;
        };

        type Human = {
            age : number;
            name : string;
        };

        // AnimalFamily型とHumanFamily型
        // プロパティ間の部分型関係が全体の部分型関係に寄与する
        {
            type AnimalFamily = {
                familyName : string;
                mother: Animal;
                father: Animal;
                child: Animal;
            };

            type HumanFamily = {
                familyName : string;
                mother : Human;
                father : Human;
                child : Human;
            };
        }
    }
}

// 余剰プロパティに対する型エラーについて
{
    // e.g.
    {
        type User = { name : string; age : number; };
        const u : User = {
            name : "shinichi",
            age : 33,
            // telNumber : "***-****-***"
        }; // リテラルで直接指定するのでエラーになる
    }

    // これはエラーにならない
    {
        type User = { name : string; age : number; }
        const obj = {
            name : "shinichi",
            age : 33,
            telNumber : "***-****-****"
        };

        const u : User = obj; // 一度インスタンス化したので問題なし
    }
}


// ジェネリックス(型引数)
{
    // 型引数を持つ型の宣言
    {
        type User<T> = {
            name: string;
            child: T;
        };

        // ジェネリック型
        {
            type Family<Parent, Child> = {
                mother: Parent;
                father: Parent;
                child: Child;
            };

            const obj : Family<number, string> = {
                mother: 0,
                father: 199,
                child: "120"
            };
        }

        // 部分型関係による型引数の制約
        // extends
        {
            type HasName = {
                name : string;
            };

            type Family<Parent extends HasName, Child extends HasName> = {
                mother: Parent;
                father: Parent;
                child: Child;
            };

            // エラー 型制約を満たさない(与えた型が部分型でない)
            // type T = Family<number, string>;

            // AnimalやHumanは, HasNameの部分型であるのでOK
            type Animal = {
                name: string;
            };
            type Human = {
                name: string;
                age: number;
            };
            type T = Family<Animal, Human>; // OK

            // Parent ∈ HasName, Child ∈ Parent
            {
                type UsualFamily<Parent extends HasName, Child extends Parent> = {
                    mother: Parent;
                    father: Parent;
                    child: Child;
                };

                // OK
                type S = UsualFamily<Animal, Human>;
                // NG
                // type N = UsualFamily<Human, Animal>;
            }
        }

        // デフォルト型引数
        {
            type Animal = {
                name: string;
            };

            type Family<Parent = Animal, Child = Animal> = {
                mother : Parent;
                father : Parent;
                child : Child;
            };

            type S = Family<string, string>;
            type T = Family; // Family<Animal,Animal>
            type U = Family<string>; // Family<string,Animal>

            type PartialFamily<Parent, Child = Animal> = {
                mother : Parent;
                father : Parent;
                child : Child;
            };

            // 型制約とデフォルト型引数の組み合わせ
            type HasName = {
                name : string;
            };

            type ExFamily<Parent extends RTCRtpHeaderExtensionParameters, 
                          Child extends HasName = Animal> = {
                mother : Parent;
                father : Parent;
                child : Child;
            };
        }
    }
}

