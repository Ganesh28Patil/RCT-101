import React,{ useReducer } from 'react';
import './App.css';
/*
const reducer = (counter,action) =>{
  switch(action.type){
    case"INCREMENT":{
      return counter + 1;
    }
    case"DECREMENT":{
      return counter - 1;
    }
    default:{
      return counter;
    }
  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer,0);
  return (
    <div className="App">
     Counter:{counter}
     <div>
       <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
       <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
     </div>
    </div>
  );
}
*/
const reducer = (counter,action) =>{
  switch(action.type){
    case"INCREMENT":{
      return counter + 1;
    }
    case"DECREMENT":{
      return counter - 1;
    }
    default:{
      return counter;
    }
  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer,0);
  return (
    <div className="App">
     Counter:{counter}
     <div>
       <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
       <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
     </div>
    </div>
  );
}

export default App;
