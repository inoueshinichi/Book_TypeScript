


{
    // 非同期関数
    // 非同期ルーチン
    function fetchFromServer(id: string): Promise<{success: boolean}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({success: true})
            }, 100); // 100ms
        });
    }

    // 非同期処理を含むasync関数の戻り値はPromise<>型
    // 非同期ルーチン (非同期処理の結果を使って何かする関数)
    // (通常はネストされたコールバック関数になるところだが, async/await構文で回避)
    async function asyncFunc(): Promise<string> {
        // Promiseな値をawaitすると中身が取り出せる(ように見える)
        const result = await fetchFromServer("111"); // Promise<{success: boolean}>
        return `The result: ${result.success}`; // Promise<string>
    }

    // 実行[1]
    // await構文を使うためにはasync functionの中で呼び出す必要がある
    (async () => {
        const result = await asyncFunc();
        console.log(`非同期実行[1] : ${result}`);
    })();

    // 事項[2]
    // Promiseとして扱う
    asyncFunc().then(result => console.log(`非同期実行[2] ${result}`));
}