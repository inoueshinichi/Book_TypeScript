/**
 * BigInt型への変換
 * BigIntにはNaNがない.
 * BigInt('foo')やBigInt(1.5)はランタイムエラーになるので注意.
 */


// BitInt型への変換
{
    const bigint1 = BigInt('1234');
    console.log(bigint1); // 1234n

    const bigint2 = BigInt(500);
    console.log(bigint2); // 500n

    const bigint3 = BigInt(true);
    console.log(bigint3); // 1n
}

// ランタイムエラー
{
    // const bigint_error = BigInt('foo');
    const bigint_error = BigInt(1.5);
}