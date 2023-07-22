/**
 * 文字列型への変換
 * 殆の型が文字列型に変換できる
 */

{
    // Number -> String
    const str1 = String(1234.5);
    console.log(str1); 

    // Boolean -> String
    const str2 = String(true);
    console.log(str2);

    // nullやundefinedも文字列に変換可能
    const str3 = String(null); // 'null'
    console.log(str3);
    const str4 = String(undefined); // 'undefined'
    console.log(str4);
}