import React from 'react'

const Counter = () => {
    const [count,setCount] = React.useState(10);


    React.useEffect(()=>{
        const id = setInterval(()=>{
            console.log('inside setInterval',count);
                setCount(function (prev){
                    if(prev === 0){
                        clearTimeout(id);
                        return prev;
                    }
                    return prev - 1;
                })
             
        },1000)

        // cleanup
        return ()=>{
            console.log("Cleaning up any set intervals")
            clearInterval(id);
        }
    },[]);
    // useEffecr has an Empty dependency
    // it will get called, everytime count gets unmounted

    // if it has dependency, count
    // it will get called, everytime count gets updated,
    // but before the useEffect callback is triggered

  return (
        <>                
            <h1>Counter  is {count}</h1>
        </>
  )
}

export default Counter