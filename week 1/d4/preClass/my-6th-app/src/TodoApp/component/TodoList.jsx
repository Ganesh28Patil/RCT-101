import React from 'react'

const TodoList = ({id,title,status,handleToggle}) => {
  return (
   <>
        {/* <h1>TodoList</h1> */}
        <h1>{title}</h1>
        <button onClick={()=>handleToggle(id)}>{status ? "Done": "Not completed"}</button>
   </>
  )
}

export default TodoList