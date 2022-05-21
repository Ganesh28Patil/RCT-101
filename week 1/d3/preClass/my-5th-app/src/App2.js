import './App2.css';
import React from 'react'
import Toggle from './classRoom/components/listing/component/TOGGLE/Toggle';
const App2 = () => {
  return (<>
          <Toggle />
         </>)
}

export default App2












// import './App2.css';
// import React from 'react'
// import TodoApp from './classRoom/components/listing/component/TodoApp';
// import CounterApp from './classRoom/components/listing/component/CounterApp';

// const App2 = () => {
//   const [toggle,setToggle] = React.useState(false);
//   const [toggle2,setToggle2] = React.useState(false);
//   return (
//       <>  
//       <div className='sqr'>
//           <h4>App2</h4>
//           <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//           {/* <button onClick={()=>setToggle(!toggle)}>
//           {((toggle) ? "Show TODO" : "Show Counter")}
//           </button> */}
//           <div className="App">      
//             {((toggle) ? <TodoApp /> : <CounterApp />)}               
//           </div> 
//       </div>    
          
//       <div className='sqr'>
//       <h4>App2.0</h4>
//           <button onClick={()=>setToggle2(!toggle2)}>
//           {((toggle2) ? "HIDE EVERYTHING" : "SHOW COMPONENT")}
//           </button>
//           <div className="App">      
//             {(toggle2)?(((toggle) ?<> <TodoApp />  <button onClick={()=>setToggle(!toggle)}>Toggle</button> </>:<> <CounterApp />  <button onClick={()=>setToggle(!toggle)}>Toggle</button></>)):null}
//             {/* {(toggle2) && (((toggle) ?<> <TodoApp />  <button onClick={()=>setToggle(!toggle)}>Toggle</button> </>:<> <CounterApp />  <button onClick={()=>setToggle(!toggle)}>Toggle</button></>))} */}
//             {/* {(toggle2) || (((toggle) ?<> <TodoApp />  <button onClick={()=>setToggle(!toggle)}>Toggle</button> </>:<> <CounterApp />  <button onClick={()=>setToggle(!toggle)}>Toggle</button></>))} */}
//           </div>
//       </div>   
     
            
//       </>
//   )
// }

// export default App2



