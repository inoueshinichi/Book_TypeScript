import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// components
import Hello from './components/Hello';
import Parent from './components/ContextProviderConsumer';
import Counter1 from './components/Hook1_useState';
import Counter2 from './components/Hook2_useReducer';
import { ParentOfMemoComp } from './components/Memo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* AppからHelloに置き換える */}
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Parent /> */}
    {/* <Counter1 initialValue={1} /> */}
    {/* <Counter2 initialValue={2} /> */}
    <ParentOfMemoComp></ParentOfMemoComp>
  </React.StrictMode>
  // <h1>見出し</h1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
