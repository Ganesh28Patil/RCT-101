import React, { useRef, useState } from 'react'

const StopWatchUseRef = () => {
    const timerId = useRef(null);
    const [watch, setWatch] = useState(0);
    const start = () => {
       if(!timerId.current){
        let id = setInterval(() => {
            setWatch((watch)=>(watch+1))
        }, 300);
        timerId.current = id;
       }
    }
    const pause = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    }
    const reset = () => {
        clearInterval(timerId.current);
        setWatch(0);
        timerId.current = null;
    }

  return (
    <>
         <h1>StopWatchUseRef</h1>
         <h3>{watch}</h3>
         <button onClick={start}>START</button>
         <button onClick={pause}>PAUSE</button>
         <button onClick={reset}>RESET</button>
    </>
  )
}

export default StopWatchUseRef