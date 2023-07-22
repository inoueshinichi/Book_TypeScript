/**
 * 論理演算子 ??
 * 
 * x ?? y
 * xがnullまたはundefinedのときのみ, yを返す. その他はxを消す
 */

// 環境変数の取得
{
    // 環境変数SECRETを取得. ただし, 存在しなければ"defualt"を返す
    const secret = process.env.SECRET ?? "default";

    console.log(`secretは${secret}です`)
}