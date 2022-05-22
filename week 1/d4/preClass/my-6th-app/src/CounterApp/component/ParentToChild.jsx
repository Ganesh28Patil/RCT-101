import React from 'react'
 const Child = ({value})=><h1>Count is : {value}</h1>;
const ParentToChild = () => {
    const [count,setCount]=React.useState(0);
  return (
      <>
          <h2>---- || ParentToChild || ----</h2>
          <div>
            <Child value={count} />
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
          </div>

      </>
    
  )
}

export default ParentToChild;