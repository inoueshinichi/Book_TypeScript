// フックの活用2

import { useReducer } = from 'react';

// reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

// 現在の状態とactionに基づいて次の状態を返す
const reducer = (currentCount : number, action : Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1;
        case 'DECREMENT':
            return currentCount - 1;
        case 'DOUBLE':
            return 2 * currentCount;
        case 'RESET':
            return 0
        default:
            return currentCount;
    }
}

