import React from 'react'

const ChildA = (props) => {
    const onHandleChange = (e)=>{
        let newValue = e.target.value;
        props.setInfo(newValue);
    }
  return (
    <>
       <div>
            <input onChange ={onHandleChange} /> <br />
           <h1>  ChildA : {props.info}</h1>
        </div>

    </>
  )
}

export default ChildA