import React from 'react';

const Child = ({value}) => (<h1>Count is : {value}</h1>);
//       
const Button = ({handleClick,label}) => (<button onClick={handleClick}>{label}</button>)

const Siblings = () => {

     const [count,setCount] = React.useState(0);
     const handleChange = (value) => {
          setCount(count + value);
     }

  return (
        <>  
            <div>
                  <h1>---- || Siblings || ----</h1>
                      <Child  value = {count}  />   
                      <Button label= "+" handleClick={()=>handleChange(1)} />
                      <Button label= "-" handleClick={()=>handleChange(-1)} />
            </div>            
        </>    
  )
}

export default Siblings;