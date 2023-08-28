import { access } from "node:fs/promises";
// import { readFile, writeFile, appendFile } from "node:fs";
import * as fs from "node:fs/promises";
import { existsSync, rmSync, appendFileSync } from "node:fs";
import { promisify } from "node:util";

{
    console.log('hello Node.js');

    // varは基本つかわない
    if (true) {
        var foo = 5;
    }
    console.log(foo);

    let bar: number = 180;
    console.log(bar);

    let str: string = "こんにちは";
    console.log(str);
}

// Data type
{
    console.log(typeof 'string'); // string
    console.log(typeof []); // object
    console.log(typeof console.log); // function
    console.log(typeof null); // object

    const obj : {
        key1: string;
        key2: number;
    } = {
        key1: 'value',
        key2: 123,
    };

    console.log(obj);


    const obj2 : any = {
        foo: {
            bar: 'baz'
        },
        now: new Date(),
        func: function() {
            console.log('function')
        }
    };
    console.log(obj2);
    console.log(obj2.foo.bar);
    console.log(obj2.now)
    console.log(obj2.func);

    const key1: string = "google";
    const key2: string = "yahoo";
    const searchEngine = {
        key1,
        key2,
    };
    console.log(searchEngine);
    console.log(searchEngine.key1);
    console.log(searchEngine.key2);

    const key: string = 'keyName';
    const idx_obj: any = {
        [key]: 'bing'
    };
    console.log(idx_obj);

    // . or [] でアクセス
    const access_obj : any = {
        foo: 'hello',
        bar: {
            baz: 'world'
        }
    };
    console.log(access_obj);
    console.log(access_obj.foo); // hello
    console.log(access_obj['foo']); // hello
    console.log(access_obj.bar.baz); // world
    console.log(access_obj['bar']['baz']); // world


    // Object.freeze()で最上位のオブジェクトを凍結しても
    // 下位のオブジェクトには代入できる. (オブジェクトはC言語のポインタと同じ)
    const frozen_obj : any = {
        ice: 'cream'
    };
    Object.freeze(frozen_obj);
    console.log(frozen_obj.ice); // cream
    // frozen_obj.ice = 'block';
    // console.log(frozen_obj.ice); // block
}

// ObjectとJSON
{
    const obj : any = {
        foo: function() {
            console.log('foo');
        },
        bar: 'bar'
    };

    // fooプロパティはJSONに変換できないので消えてしまう
    const jsonStr = JSON.stringify(obj);
    
    console.log(obj);
    console.log(jsonStr);

    // パースしたobjも関数プロパティは消えている
    const parsedObj = JSON.parse(jsonStr);
    console.log(parsedObj);
}

// 配列
{
    const strArray: Array<string> = ['foo', 'bar', 'baz'];
    console.log(strArray[0]); // foo
    console.log(strArray.at(-1)); // baz
    console.log(strArray.length); // 3

    type Person = { name: string; age: number };

    const students : Array<Person> = [
        { name: 'Alice', age: 10 },
        { name: 'Bob', age: 20 },
        { name: 'Catherine', age: 30 }
    ];

    // map
    const nameArray: Array<string> = students.map(function (person: Person): string {
        return person.name;
    });
    console.log(nameArray); // ['Alice', 'Bob', 'Catherine']

    // filter
    const under20 = students.filter((person: Person): boolean => {
        return person.age <= 20;
    });
    console.log(under20);
}

// class, JavaScriptのclassはprototypeのシンタックスシュガー
{
    class People {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        printName(): void {
            console.log(this.name);
        }
    }

    const p = new People('shinichi');
    p.printName();

    /* prototypeを使う旧型の記述 */
    // コンストラクタ
    function Person(name : string) {
        this.name = name;
    }

    Person.prototype.printName = function () {
        console.log(this.name);
    }

    const old_p = new Person('inoue');
    old_p.printName();
}

// 非同期処理 (Core API)
{
    const dataDir: string = "/Users/inoueshinichi/Desktop/MyGithub/Book_TypeScript/data/";

    // 1. callback
    {
        console.log('A');

        // エラーファーストコールバック方式
        // readFile(__filename, (err, data) => {
        //     console.log('B', data);
        // });

        // Promise方式
        fs.readFile(dataDir + "text.txt").then(file => {
            console.log(file);
        }).catch(err => {
            console.error(err);
        });

        console.log('C');

        // 1. ファイルの読み込み
        // 2. ファイル名をフォーマットして別名で書き込み
        // 3. アクセス権限をreadonlyに変更
        const backupFile = dataDir + `text-${Date.now()}`;

        // コールバックのネスト地獄なのでこの記述はダメ.
        fs.readFile(dataDir + "text.txt").then(file => {
            console.log(`read file: ${file}`);
            fs.writeFile(backupFile, file).then(file => {
                fs.chmod(backupFile, 0o400).then(file => {
                    console.log('done 2');
                });
            }).catch(err => {
                console.log(`Failed to writeFile: ${err}`);
            })
        }).catch(err => {
            console.log(`Failed to readFile: ${err}`);
        });

        console.log("done 1");
    }

    // 単純なコールバックでは, 非同期処理の順序は保証されない
    {
        // ファイルが存在すれば同期的にファイル削除
        if (existsSync(dataDir + "unsequence_data.txt"))
        {
            rmSync(dataDir + "unsequence_data.txt");
        }

        // 非同期で書き込み
        for (let i = 0; i < 100; i++) {
            const recordText = `write: ${i}\n`;
            fs.appendFile(dataDir + "unsequence_data.txt", recordText).catch(err => {
                console.error(`Failed to appendFile: ${err}`);
            });
        }
        console.log("done 3");

        // ファイルが存在すれば同期的にファイル削除
        if (existsSync(dataDir + "sequence_data.txt"))
        {
            rmSync(dataDir + "sequence_data.txt");
        }

        // 同期的に書き込み
        for (let i = 0; i < 100; i++) {
            const recordText = `write: ${i}\n`;
            appendFileSync(dataDir + "sequnce_data.txt", recordText);
        }

        console.log('done 4');
    }

    // Promise
    {
        const promiseFunc = (x: any): Promise<any> => {
            // 型定義
            type Executor = (resolve: (value: any) => void, reject: (reason?: any) => void) => void;

            // 非同期実行処理
            const executor: Executor = (resolve, reject) => {
                // 非同期で行う処理をここに記述
                const name: string = "Shinichi Inoue";
                console.log(`${name} on executor in promise`);

                // 状態の決定(FulFilled状態:成功, Rejected状態:失敗)
                if (typeof x === `string`) {
                    resolve(name); // 成功
                } else {
                    reject(new Error("Promise reject error.")); // 失敗
                }
            };
            
            return new Promise(executor);
        };

        const myPromise: Promise<any> = promiseFunc('string type');

        myPromise.then((value: any): void => {
            console.log(`成功: ${value}`);
        }).catch((err: any): void => {
            console.log(`失敗`);
        });

        console.log("done 5");
    }

    // Promise化
    {
        const my_readFileAsync = promisify(fs.readFile);
        const my_writeFileAsync = promisify(fs.writeFile);
        const my_chmodAsync = promisify(fs.chmod);

        // 最新のNode.jsでは 標準化された(Promiseを返す)非同期関数が利用できる.
    }

    // Async/Await
    {
        // read/write/chmod
        {
            // async関数はPromise<T>を戻り値にする
            // return Promise.resolve(T)
            const main = async (): Promise<string> => {
                const backupFile = dataDir + `async_await_text-${Date.now()}`;
                const data = await fs.readFile(dataDir + `text.txt`);
                await fs.writeFile(backupFile, data);
                await fs.chmod(backupFile, 0o400); // 読み取り専用
                return "async return value";
            };

            // 実行
            main().then((data: string): void => {
                // Promise成功時 Promise.resolve(T) -> FulFilled状態
                console.log(data);
            }).catch((err: string): void => {
                // 例外もしくはPromise.reject(T) -> Rejected状態
                console.error(err);
            });

            console.log("done 6");
        }
    }
}