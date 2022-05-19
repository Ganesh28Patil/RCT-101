// import React,{useState} from 'react';
import React from "react";
const Counter = () => {
    // const [counter,setCounter] = useState(0);
    const [counter,setCounter] = React.useState(0);
  
    const handleIncrement = (value)=>{
      // counter += value;
      // console.log('counter:', counter)
      setCounter(counter+value); 
    }
  return (
    <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=>handleIncrement(1)}>Add</button>
        <button onClick={()=>handleIncrement(-1)}>Reduce</button>
    </>
  )
}
export default Counter;
