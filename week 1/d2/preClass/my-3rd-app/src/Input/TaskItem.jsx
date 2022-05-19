import React from 'react'

function TaskItem({title, status,color})  {
  return (
      <>
       {/* // <div>Taskitem</div> */}
        <h2 style={{color}}>{`${title}`} - {`${status}`}</h2>     
      </>
   
  )
}
export { TaskItem};