import React from 'react'
import styles from './todo.module.css';
const TodoItem = ({todo,onDelete}) => {
  const [isCompleted,setisCompleted] = React.useState(todo.isCompleted);
  return (
  <>        
    <div className={styles.todo} key = {todo.id}>
      <div><input type="checkbox" checked={isCompleted} onChange ={(e)=>{setisCompleted(e.target.checked)}} /></div>                    
      <div className={isCompleted ? styles.striked :""}>{todo.value}</div>
      <button onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
 </>
  )
}

export default TodoItem