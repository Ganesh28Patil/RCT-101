// TodoItem.jsx (individual task)
import React from 'react'
import styles from './todo.module.css';



const TodoItem = ({code,item,done}) => {
  return (
     <>
        {/* <div>TodoItem</div> */}
        <div key={code} className={styles.frame}><p>{item}</p><button  onClick={()=>{done(code)}} className={styles.circle}></button></div>
     </>
  )
}

export default TodoItem