import React from 'react'

const TodoInput = ({onClick}) => {
    const [title,setTitle] = React.useState("");
  return (
      <>
        <div>TodoInput</div>
        <input placeholder='Add Somthing' value={title} onChange={(e)=>(setTitle(e.target.value))} />
        <button onClick={()=>onClick(title)}> Add </button>
      </>
  )
}

export default TodoInput