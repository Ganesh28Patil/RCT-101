import React from 'react'
import styles from './count.module.css';
// If counter is odd, show counter in red color,
//  if it's even show in green color
function Counter({initialValue}) {
    const [count,setCount] = React.useState(initialValue);
  return (
      <>
          <div>Counter</div>
          <h1 className={ (count % 2 !== 0) ? styles.red : styles.green}>{count}</h1>
          <button onClick={()=>{setCount(count + 1)}}>Increment</button>
          <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
          <button onClick={()=>{setCount((count < 0 )?(-(count * 2)):count * 2)}}>Double</button>
      </>
    


  )
}

export default Counter