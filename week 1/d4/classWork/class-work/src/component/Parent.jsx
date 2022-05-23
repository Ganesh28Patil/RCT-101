import React from 'react'
import Child1 from './Child1';
// import Child2 from './Child2';

const Parent = () => {
    // let information = "any info updates";
    // const [value,setValue] = React.useState("");
    const [childValue,setChildValue] = React.useState("");
    // const[info,setInfo] = React.useState("");
  return (
   <>
        {/* <div>Parent : {information}</div> */}
        {/* <div>Parent : {value}</div> */}
        <div>Parent :  {childValue}</div>

            <br />
            {/* <input placeholder='Enter Info' onChange={ (e) =>(setValue(e.target.value))}  /> */}
             {/* <Child1 info = {information} /> */}
             {/* <Child1 info = {value}  /> */}
             <Child1 childValue={childValue} setChildValue={setChildValue} />

             {/* <Child1 info = {info} setInfo={setInfo}/> */}
             {/* <Child2 info = {info} /> */}

   </>
  )
}

export default Parent;