import React from 'react';
import './App.css';
import Calculate from './components/calculate';
import Show from './components/show';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Counter></Counter>
         <Calculate></Calculate>
         <Show></Show>
      </header>
    </div>
  );
}

export default App;