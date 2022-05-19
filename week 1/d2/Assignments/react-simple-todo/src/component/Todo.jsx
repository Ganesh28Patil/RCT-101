import React from 'react';
import styles from './todo.module.css'
import TodoList from './TodoList';

// Todo.jsx (contains the input elements, and TodoList )
const Todo = () => {
    const [newData,setNewData] = React.useState("");
    const [data,setData] = React.useState([]);
    const handleChange =(e)=>{(setNewData(e.target.value))}
       
  return (
    <>
        <div>Todo</div>
        <div>
                {             
                     data.map((item)=>(
                         <>
                            <TodoList key = {item.id}  data = {item}/>     
                              {/* <div>{item.value}</div> */}
                         </>                    
                     ))
                }               
        </div>
        <div className={styles.panel}>
            <input value={newData} onChange={handleChange}  placeholder='Write Something'/>
            <button
                onClick={()=>{
                    setData([...data,{id:Date.now(),value:newData,isCompleted:false}])
                    setNewData("")}}
              >+</button>
        </div>
    </>
  )
}

export default Todo