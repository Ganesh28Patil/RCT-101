import React from 'react'
import styles from './todoStyle.module.css';

const TodoItem = ({item,deleteEle}) => {
  return (
      <>  
        <div className={styles.todoItem}>
          <h3>TodoItem</h3>   
          <li> {item} </li>
          <button onClick={()=>deleteEle(item)}>Delete</button>
        </div>
      </>  
  )
}

export default TodoItem;