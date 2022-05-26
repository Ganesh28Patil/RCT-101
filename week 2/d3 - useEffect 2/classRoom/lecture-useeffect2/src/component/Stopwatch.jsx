import React from 'react'

const Stopwatch = () => {

    const [timerId,setTimerId] = React.useState(null);
    const [ watch,setWatch] = React.useState(0);
    const start = ()=> {
       const id = setInterval(()=>{
            setWatch((watch)=>(watch+1))
        },1000);
        setTimerId(id);
    };
    const reset = ()=> {
        clearInterval(timerId)
        setWatch(0);
        
    };
    const pause = ()=> {
        clearInterval(timerId);
        setTimerId(null);
    };
  return (
   <>
        <h1>Stopwatch</h1><h1> : {watch}</h1>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
        
   </>
  )
}

export default Stopwatch