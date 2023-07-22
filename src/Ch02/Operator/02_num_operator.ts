/**
 * 算術演算子
 */

{
    const addResult = 1024 + 364 + 500; // number
    console.log(addResult); // 1838
    const discount = addResult * 0.7;
    console.log(discount); // 1286.6

    const sqrt2 = 2 ** 0.5;
    console.log(sqrt2); // 141421...
    console.log(sqrt2 - 1); // 0.41421...

    console.log(18/12); // 1.5
    console.log(18n/12n); // 1n
    console.log(18%12); // 6
    console.log(18n % 12n ); // 6n

    const x = 123; // number
    const minusx = -x; // number
    console.log(minusx); - 123

    const str: string = '123';
    console.log(+str * 100); // 12300

    let foo = 10;
    foo++
    console.log(foo); // 11
    foo--;
    console.log(foo); // 10

    console.log(--foo); // 10
    console.log(++foo); // 9
    // 10
}