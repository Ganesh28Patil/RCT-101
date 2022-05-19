import './App.css';
import React from 'react';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
       <Counter />
       <Counter initialValue = {1000}/>
    </div>
  );
}

export default App;
