import React, { useState } from 'react'

const StopWatch = () => {
    const [watch, setWatch] = useState(0);
    const [timerId, setTimerId] = useState(null)
    const start = ()=>{
        if(!timerId){
            let id =  setInterval(() => {
                setWatch((prev)=>prev+1);
            }, 1000);
            setTimerId(id);
        }
    };
    const pause = ()=>{
        clearInterval(timerId);
        setTimerId(null);
    };
    const reset = ()=>{
        clearInterval(timerId);
        setWatch(0);
        setTimerId(null);

    };


  return (
        <>
            <h1>StopWatch : {watch}</h1>
            <div>
                <button onClick={start}>START</button>
                <button onClick={pause}>PAUSE</button>
                <button onClick={reset}>RESET</button>
            </div>
        </>
  )
}

export default StopWatch