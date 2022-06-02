//  USe Case for usereff Hook as Timer
import React from 'react'
const Timer = () => {
    const [time,setTime] = React.useState(0);
    const [isRunning,setIsRunning] = React.useState(false)
    const timerReff = React.useRef()
    React.useEffect(() => {
        startTimer();
        // effect
        return stopTimer(); // cleanUp         
    },[]);
    const startTimer = () => {
        if(isRunning) return;
        timerReff.current =  setInterval(()=>{
         setTime((prev)=>(prev + 1));
        },1000)
        setIsRunning(true);
    }
    const stopTimer = () => {
        clearInterval(timerReff.current);
        setIsRunning(false);
    }
  return (
    <>
        <h6>----- Timer -----</h6>
        <h2>Counter</h2>
        <h3>{time}</h3>
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>

    </>
  )
}

export default Timer