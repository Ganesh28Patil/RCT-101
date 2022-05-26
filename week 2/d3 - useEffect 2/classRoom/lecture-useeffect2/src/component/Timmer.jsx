import React from 'react'

const Timmer = () => {
    const [timer,setTimer] = React.useState(3);
    
    React.useEffect(() => {
    //     // effect
     const id =   setInterval(()=>{
        //  stale state
        if(timer < 1){
            clearInterval(id);
        }else{
            setTimer((timer)=>(timer-1));
        }           
        },1000);
        return () => {
            // cleanup
            //  call a api to inform that user has logged out
            clearInterval(id);
 
        };
        // component is unmounted
    }, [timer]);

  return (
    <>
        <div>Timmer</div>
        <div>Count Down : {timer}</div>
        <button onClick={()=>setTimer((timer+1))}>+</button>
        <button onClick={()=>setTimer((timer-1))}>-</button>
    </>
  )
}

export default Timmer

/*
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
*/