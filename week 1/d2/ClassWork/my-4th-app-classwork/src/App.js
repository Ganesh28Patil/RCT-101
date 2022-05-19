import './App.css';
import React from 'react';
import Counter from './components/Counter';
import Todo from './components/Todo';
function App() {
  return (
    <div className="App">
       <Counter />
       <Counter initialValue = {1000}/>        
       <Todo />
    </div>
  );
}

export default App;
