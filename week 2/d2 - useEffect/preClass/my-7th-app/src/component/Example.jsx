import React from 'react'
const Example = () => {
const [num, setNum] = React.useState(0);
React.useEffect(() => {
     // effect
    console.log("useEffect is called at",Date.now()," at num = ",num);
  return () => {
    // cleanup
    console.log("CLean-up is called at",Date.now()," at num = ",num);
  };
}, [num]);

  return (
        <>   
             <h1>Example {num}</h1>
             <button onClick={()=>setNum(num+1)}>Add</button>
        </>
  )
}

export default Example