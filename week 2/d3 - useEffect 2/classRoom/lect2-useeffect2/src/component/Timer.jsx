import React, { useEffect, useState } from 'react'


const Timer = () => {
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        // effect
        const id = setInterval(() => {
            if(timer <= 0){
                console.log("negative");
                clearInterval(id);

            }else{
                // setTimer((timer)=>(timer-1))
                setTimer((timer-1));
            }        
        }, 1000);
        return () => {
            // cleanup
             clearInterval(id);

            //  if(timer < 1) clearInterval(id);
        };
    }, [timer]);
  
  return (
    <>
        <h1>Timer : {timer}</h1>        
    </>
  )
}

export default Timer



/*
import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(10);
    
    useEffect(() => {
        // effect
        const id = setInterval(() => {
            // setInterval
            if(time <= 0){
                console.log("Negative");
                clearInterval(id);
            }else{
                // setTimer((timer)=>(timer-1));
                setTime(time-1);
            }
        }, 1000);
        return () => {
            // cleanup
            clearInterval(id);
        };
    }, [time]);
  return (
   <>
        <h1>Timer : {time}</h1>
   </>
  )
}

export default Timer
*/

