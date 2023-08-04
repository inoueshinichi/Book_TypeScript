

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

// any
{

}