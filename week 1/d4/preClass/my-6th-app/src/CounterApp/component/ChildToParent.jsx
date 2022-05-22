import React from 'react'
        const Child = ({value,handleIncrement,handleDecrement})=>(
        <>
            <div>
                <h1>Count is : {value}</h1>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <button onClick={handleIncrement}>+ </button>
                    
                </div>
            </div>
        </>
        )
const ChildToParent = () => {
         const [count,setCount]=React.useState(0);
         const handleValue = (value)=>{
             setCount(count + value)
         }
    return (
        <>
            <h2>---- || ChildToParent || ----</h2>
            <div>
              <Child value={count} handleIncrement={()=>handleValue(1)} handleDecrement={()=>handleValue(-1)} />            
            </div>
  
        </>
      
    )
}

export default ChildToParent

