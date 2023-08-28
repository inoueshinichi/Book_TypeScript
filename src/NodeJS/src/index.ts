import { access } from "fs";

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

