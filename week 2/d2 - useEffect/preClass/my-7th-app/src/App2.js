import './App.css';
import React from 'react'
import Counter from './component/Counter';
import Example from './component/Example';
import Todo from './component/Todo';

const App2 = () => {
    const [showCounter,setShowCounter] = React.useState(false);
 
  return (
        <>
              <h1>----App2----</h1>
              {/* {!showCounter && 'hello'} */}
             {showCounter && <Counter />}
             <br />
             <button onClick={()=>setShowCounter(!showCounter)}>Show</button>
            
             `${ console.log("-----------------example---------------")}`

             <Example />
             `${ console.log("----------------todo app----------------")}`
                  <Todo  />

        </>
  )
}

export default App2