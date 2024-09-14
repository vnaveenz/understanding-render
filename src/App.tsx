/* eslint-disable prefer-const */
import './App.css';
import { StrictMode } from 'react';
import root from './main';

let counterValue = 1;

function reRender() {
  counterValue += 1;
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
function Counter() {
  return (
    <section>
      <h1>Counter 1:</h1>
      <p>You have clicked {counterValue} times</p>
      <button type="button" onClick={reRender}>
        Click me
      </button>
    </section>
  );
}

function Counter2() {
  return (
    <section>
      <h1>Greater Counter:</h1>
      <p>You Clicked: {counterValue} times</p>
      <button type="button" onClick={reRender}>
        Click me
      </button>
    </section>
  );
}

function App() {
  let currentCounter;
  currentCounter = counterValue === 1 ? <Counter /> : <Counter2 />;
  return currentCounter;
}

export default App;
