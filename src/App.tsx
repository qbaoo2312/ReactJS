import React from 'react';
import './App.css';
import Calculate from './components/calculate';
import Show from './components/show';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Calculate></Calculate>
         <Show></Show>
      </header>
    </div>
  );
}

export default App;