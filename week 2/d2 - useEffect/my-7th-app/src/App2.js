import './App.css';
import React from 'react'
import Counter from './component/Counter';
import Example from './component/Example';

const App2 = () => {
    const [showCounter,setShowCounter] = React.useState(false);
 
  return (
        <>
              <h1>----App2----</h1>
              {/* {!showCounter && 'hello'} */}
             {showCounter && <Counter />}
             <br />
             <button onClick={()=>setShowCounter(!showCounter)}>Show</button>
             <Example />
        </>
  )
}

export default App2