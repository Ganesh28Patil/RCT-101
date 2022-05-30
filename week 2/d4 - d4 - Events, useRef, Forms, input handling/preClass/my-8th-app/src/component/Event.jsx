import React from 'react'

const Event = () => {
    const handleClick=(e)=>{
        console.log(e.target);
      }
  return (
   <>
        <h6>----- Event -----</h6>
        <button onClick={handleClick}>Add</button>
   </>
  )
}

export default Event