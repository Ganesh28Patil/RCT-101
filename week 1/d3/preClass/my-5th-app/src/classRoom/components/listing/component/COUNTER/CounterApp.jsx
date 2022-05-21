import React from 'react'

const CounterApp = () => {  
  const [count,setCount] = React.useState(0);
  const handleIncrement = ()=> {
  setCount(count + 1);
}
  return (
  <>  
  <div className='sqr'>CounterApp
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={()=>setCount(count - 1)}>Deccrement</button>
  </div>
  </>
)
}

export default CounterApp




