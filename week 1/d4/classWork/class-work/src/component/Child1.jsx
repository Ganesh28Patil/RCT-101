import React from 'react'

const child1 = (props) => {
  return (
    <>
        <div>
           {/* <div>child1 : {props.info}</div> */}
           <input placeholder='Enter Info' onChange={ (e) =>(props.setChildValue(e.target.value))}  />
           <div>child1 : {props.childValue}</div>
           {/* <div>child1 : {props.info }</div>  */}
       </div> 
        </>
  )
}

export default child1