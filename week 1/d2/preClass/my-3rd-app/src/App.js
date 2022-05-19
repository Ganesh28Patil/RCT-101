import './App.css';
import React from 'react'
import Counter from './Counter/Counter';
import { Task } from './Input/Task';

function App() {
 
  return (
    <div className="App">
        <Counter />   
        <Task />
    </div>
  );
}

export default App;
