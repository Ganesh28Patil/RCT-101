import React from 'react'
// TodoItem.jsx (individual task)
import styles from './todo.module.css'

const TodoItem = ({listItem}) => {
    console.log('listItem:', listItem)
  
    
  return (
      <>
           {/* <div>TodoItem</div> */}
           <div className={styles.panel}>
                <div>{listItem}</div>  
                <button 
                // className={(true)? styles.red :styles.green} 
                id={(true)? styles.blue : styles.green}
                onClick={()=>(styles.green)} 

                ></button>
           </div>
           
      </>
  )
}

export default TodoItem;