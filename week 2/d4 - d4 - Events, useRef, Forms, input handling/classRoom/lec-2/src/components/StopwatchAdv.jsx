import React, { useState } from 'react'

const StopwatchAdv = () => {
   const [watch, setWatch] = useState(0);
   const [timerId, setTimerId] = useState(null)
  const start = () =>{
    if(!timerId){
      let id = setInterval(() => {
        setWatch((watch)=>(watch+1));
      }, 1000);
      setTimerId(id);
    }
    
  }
  const reset = () =>{
    clearInterval(timerId);
    setWatch(0);
   setTimerId(null);
  }
  const pause = () =>{
    clearInterval(timerId);
    setTimerId(null);
  }
 

  return (
    <><h1>Stopwatch Advance</h1>
      <h1>{watch}</h1>
    <button onClick={start}>START</button>
    <button onClick={pause}>PAUSE</button>
    <button onClick={reset}>RESET</button>
    
     </>
  )
}

export default StopwatchAdv