// hooks use useState
// hooks are set of inbuild react functions used to interact with VDOM.
// useState 15 a hook in React
// which is used to infarn VDOM of the changes that needs to be rendered
// useState returns 2 things in an array 
// variable and a function to update that vartiable
// state
// state is : info that is changing on DOM
import React from 'react';

function Counter({initialValue}){
/*
    // let count = 0;
    const [count,setCount] = React.useState(0);
    const incrementCount = ()=>{
        setCount(count+1);

        // console.log("Pre",count)
        // count++;
        // console.log("Post",count)

    }
    const decrementCount = ()=>{
        setCount(count-1);
    }
    */
    const [count,setCount] = React.useState(0); 
   
    const [count1,setCount1] = React.useState(initialValue); 
      
    return(
        <>
            <div>
                <h1>Counter APP {count}</h1>
                <h1>Counter APP {count1}</h1>
                <button onClick={()=> setCount(count+1)}>Increment</button>
                <button onClick={()=> setCount(count-1)} >Decrement</button>
                <div>
                <button onClick={()=>  setCount1(count1+100)}>Increment</button>
                </div>
            </div>
        </>
    )
}
export default Counter;