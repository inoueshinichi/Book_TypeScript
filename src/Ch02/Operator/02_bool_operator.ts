/**
 * 比較演算子, 等価演算子
 * 
 * 比較演算子 : <,>,<=,>=
 * 等価演算子 : ==, !=, ===, !==
 * 
 * ===は, pythonでのis,(メモリオブジェクト自体が同じ)
 * !==は, not is.
 * 
 * @note ==と!=は殆の場面で使用してはならない
 * 
 * @note x == null (xはnullもしくはundefined)の場面のみ使って良い
 * 代替 x === null || x === undefined
 * 
 * @warning 比較演算子 と NaN(number)の評価結果は, 必ずfalseを返す挙動をする
 */

// 文字列の比較
{
    // trueが表示される(aはoよりもコードポイントが小さいため)
    console.log("apple" < "orange");
}

// ==と===の違い
{
    const str: any = "3";

    // true が表示される(文字列が数値に変換されるので)
    console.log(str == 3);

    // false が表示される(異なる型である文字列と数値を比較するので)
    console.log(str === 3);
}

// 比較等価演算子とNaN
{
    console.log(3 > NaN); // false
    console.log(3 < NaN); // false
    const nan : number = NaN;
    console.log(nan === NaN); // false


    // 変数xのNaN判定
    const x : number = NaN;
    if (Number.isNaN(x))
    {
        console.log(`xは, NaNです. Given is ${x}`);
    }
}