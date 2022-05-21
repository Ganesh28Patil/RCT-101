import React from 'react'
import styles from './todoStyle.module.css';

const TodoInput = ({addTodo}) => {
  const [str,setStr] = React.useState("");
  // console.log('str:', str)
  return (
  
  <> 
      <div className={styles.todoInput}>
          <h3>TodoInput</h3>
        <input type="text" value={str} onChange={(e)=>(setStr(e.target.value) )}  placeholder='Add ur Todo' /> 
        <button
           onClick={()=>{            
            addTodo(str)
            setStr("")
           }}

           > ADD </button>
      </div>
    </>
  )
}

export default TodoInput;