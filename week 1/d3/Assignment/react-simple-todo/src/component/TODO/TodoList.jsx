import React from 'react';
import styles from './todoStyle.module.css';


const TodoList = ({children}) => {
  // console.log('children:', children)
  return (
    <>
      <div className={styles.todoList}>     
       <ul>
         <h3>TodoList</h3>
         {/* {todos.map((data)=>(<li>{data}</li>))} */}
         {children}
       </ul>
      </div>
    </>
  )
}

export default TodoList;