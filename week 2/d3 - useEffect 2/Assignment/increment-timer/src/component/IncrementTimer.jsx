import React, { useEffect, useState } from 'react'

const IncrementTimer = ({start,end}) => {
    console.log("start = ",start," end = ",end);
    const [timer, setTimer] = useState(start);
    console.log('timer:', timer)
    useEffect(() => {
        // effect
        const id = setInterval(()=>{setTimer((timer)=>(timer + 1))},1000);
        if(timer === end) clearInterval(id);
        return () => {
            // cleanup
            clearInterval(id);
        };
    }, [timer,end]);
   
  return (
        <>
        <h1>IncrementTimer</h1>
            <h1>{timer}</h1>
        </>
      )
}

export default IncrementTimer