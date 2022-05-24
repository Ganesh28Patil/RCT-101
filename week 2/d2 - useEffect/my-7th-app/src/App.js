import React from 'react';
import './App.css';

function App() {
   const [count,setCount] = React.useState(0);
  // mounting phase 
  console.log(1);

  React.useEffect(()=>{
    console.log("inside useEffect");
  },[])
  console.log(2);

  //  useEffect(callback,dependency array)
  //  2nd use of React useEffect  is to trigger some change once a perticular value is called

  React.useEffect(()=>{
    console.log("before updating title")
    document.title = `you have clicked ${count} times`
  },[count])
  return (
    <div className="App">
        {/* useEffect */}
        <h3>{count}</h3>
        <button onClick={()=>(setCount(count+1))}>Add</button>
    </div>
  );
}

export default App;
