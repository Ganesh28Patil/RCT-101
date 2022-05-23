import React from 'react'

const child2 = (props) => {
  const onHandleChange =(e)=>{
      let newValue = e.target.value;
      props.setValue(newValue);
  }
  return (
    <>
         <input placeholder='Enter Info' onChange={onHandleChange}  />
         <div>child2 : {props.info}</div>

    </>
  )
}

export default child2