import React, { useState } from 'react'

function msToTime(duration){
    var milliseconds = Math.floor((duration % 1000)/1000);
    var seconds = Math.floor((duration/1000)%60);
    var minutes = Math.floor((duration/(1000*60)) % 60);
    var hours = Math.floor(((duration/(1000*60*60)) % 24));

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;


    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
const Stopwatch2 = () => {
    const [watch, setWatch] = useState(1000);
    const [timerId, setTimerId] = useState(null)
    const start = ()=>{
        if(!timerId){
            let id =  setInterval(() => {
                setWatch((prev)=>prev+1000);
            }, 100);
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
            <h1>StopWatch : {msToTime(watch)}</h1>
            <div>
                <button onClick={start}>START</button>
                <button onClick={pause}>PAUSE</button>
                <button onClick={reset}>RESET</button>
            </div>
        </>
  )
}

export default Stopwatch2