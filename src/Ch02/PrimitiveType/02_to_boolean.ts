/**
 * 真偽値への変換
 * 
 * 数値 : 0とNaNがfalse, それ以外はtrue
 * BitInt : 0nがfalse, それ以外はtrue
 * 文字列: 空文字列がfalse, それ以外はtrue
 * null/undefined: falseになる
 * オブジェクト: すべてtrue
 */

{
    console.log(Boolean(123)); // true
    console.log(Boolean(0)); // false
    console.log(Boolean(1n)); // true
    console.log(Boolean(0n)); // false
    console.log(Boolean("")); // false
    console.log(Boolean('foobar')); // true
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
}