import './App.css';
import React from 'react'
import Counter from './component/Counter';
import Example from './component/Example';
import Todo from './component/Todo';

const App2 = () => {
    const [showCounter,setShowCounter] = React.useState(false);
 
  return (
        <>
              <h1>----  App2 ----</h1>
              <div>
                    {/* {`${ console.log("----------------todo app----------------")}`} */}
                    <Todo  />
              </div>              
              <div>
              <h2>--------  counter App   -----------</h2>
                  {/* {!showCounter && 'hello'} */}
                  {showCounter && <Counter />}
                           <br />
                           <button onClick={()=>setShowCounter(!showCounter)}>Show</button>
              </div>
              <div>
                    <h2>-------- Example App -----------</h2>
                   {/* {`${ console.log("-----------------example---------------")}`} */}
                   <Example />
              </div>
            


           
           
        </>
  )
}

export default App2