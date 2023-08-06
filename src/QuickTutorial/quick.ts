

// 配列
{
    // string型の配列
    const array: string[] = [];
    array.push('Inoue');
    array.push('Shinichi');

    // ジェネリック表記
    const array2 : Array<number> = [];
    array2.push(1);
    array2.push(2);

    // Union型やタプル
    const mixedArray = ['foo', 1];
    const mixedArrayU: (string|number)[] = ['foo', 2]; // Union型
    const mixedArrayT: [string, number] = ['foo', 3]; // Tuple
}

// オブジェクト
{
    // string型のname, number型のageのみをもつオブジェクトの型定義
    const user: { 
        name: string;
        age: number;
    } = {
        name: "shinichi",
        age: 33,
    };

    type MyType = {
        name: string;
        age: number;
    };

    const user2 : MyType = {
        name: "inoue",
        age: 33,
    };

    // オプショナルな型を含むオブジェクト
    {
        function printName(obj: { firstName: string, lastName?: string}) {
            console.log(`${obj.firstName}, ${obj.lastName ?? "***"}`);
            console.log(`${obj.firstName}, ${obj?.lastName}`);
        }

        const user: { firstName: string; lastName?: string; } = {
            firstName: 'inoue',
            lastName: undefined,
        };

        printName(user);
        printName({ firstName: 'inoue', lastName: 'shinichi'});
    }
}

// any　基本使わない
// {
//     let user : any = { firstName: 'Shinichi' };
//     // 以下のコードでいずれもエラーがでない
//     user.hello(); // runtime error
//     user();
//     user.age = 100;
//     user = 'hello';

//     // 他の型への代入も許容
//     const n : number = user;
// }

// 関数
{
    // Nulltable 引数
    {
        function sayHello(name: string, greeting?: string): string {
            return `${greeting} ${name}`;
        }

        console.log(sayHello('Shinichi'));
        console.log(sayHello('Shinichi', 'Hello'));
    }

    // ファンクタ引数
    {
        function printName(firstName: string, formatter: (name: string) => string) {
            console.log(formatter(firstName));
        }

        function formatName(name: string): string {
            return `${name} san`;
        }

        printName('Shinichi', formatName) // Shinichi san
    }

    // アロー関数
    {
        let sayHello = (name: string): string => `Hello ${name}`;

        console.log(sayHello('shinichi'));
    }

    // 関数の型 (引数名: 引数の型) => 戻り値の型
    {
        function genBirdsInfo(name: string): string[] {
            return name.split(',');
        }

        // 関数の型を利用
        // (x: string) => string[]
        function singBirds(birdInfo: (x: string) => string[]): string {
            return birdInfo('hato, kiji')[0] + ' piyo piyo';
        }

        console.log(singBirds(genBirdsInfo)); // 'hato piyo piyo
        // console.log(singBirds('dobato')); // 型が合わないためエラー
    }
}


// 型推論
{
    // 基本
    {
        const age = 10;
        // console.log(age.length); // エラー

        const user1 = {
            name: 'Shinichi',
            age: 33
        }
        // console.log(user1.age.length); // エラー

        function getUser() {
            return {
                name: 'Shinichi',
                age: 33
            }
        }

        const user2 = getUser();
        // console.log(user2.age.length);
    }

    // 配列の型推論　
    {
        const names = ['Inoue', 'Shinichi', 'No Job']

        names.forEach((name) => {
            // nameはstring型と推論される
            console.log(name.toLocaleUpperCase());
        });
    }

    // 代入先の変数の型が決まっている際に, 代入する値と型が一致しないケース
    // でエラーになる推論機能を搭載している
    {
        // window.confirm関数の戻り値はbooleanを返すことをTypeScriptは知っている
        // ため代入する関数の型が一致しない場合, コンパイルエラーになる.

        // window.confirm = () => {
        //     // booleanをreturnしない限りエラーになる
        //     // console.log('confirm関数'); // エラー
        //     return false;
        // }

        // console.log(window.confirm());
    }

    // 型アサーション
    {
        // document.getElementById()の戻り値の型
        {
            // document.getElementById()というJavaScript(DOM)組み込み関数を
            // そのまま使用する場合, TypeScriptではHTMLElement(もしくはnull)が
            // 返ってくることしか知らない. divだったらcanvasだったらと自動で判定
            // 処理はやってくれない.

            // document.getElementById()が返すのはHTMLElementで, HTMLCanvasElement
            // ではないので, 型が合わず, エラーとなる　
            // const myCanvas = document.getElementById('main_canvas');
            // console.log(myCanvas.width); // error TS2339:

            // もし開発者が対象のIDから返ってくる型がHTMLCanvasElementであるとわかっている
            // 場合, asを用いて型変換できる.
            // const myEvidentCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

            // TypeScriptの型アサーションは保守的, 複雑な型アサーションを実現するには
            // 1. any型に変換
            // 2. 対象の型に変換
            // の二段構えで行う
            // const result = (response as any) as User;
        }

        // 型アサーションによる実行時エラーに注意
        {
            const hoge: any = 'test';
            const fuga: number = hoge as number;
            // コンパイル時にはnumber型として扱ってエラーが起きないが, 実行時にstring型が渡されるため
            // 実行時エラーが発生する
            // console.log(fuga.toFilxed(2)); // 実行時エラー
        }
    }
}

// 型エイリアス
{
    type Point = {
        x: number;
        y: number;
    };

    function printPoint(point: Point) {
        console.log(`x座標は${point.x}です`);
        console.log(`y座標は${point.y}です`);
    }

    printPoint({x: 100, y: 200});

    // 型があっていてもプロパティが異なるとエラー
    // printPoint({z: 100, t: 100});
}