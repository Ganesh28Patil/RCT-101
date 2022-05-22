import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid'

const Todo = () => {
    const [ data,setData] = React.useState([]);
    const [showAll,setShowAll] = React.useState(true);
    const handleAdd =(title)=>{
        const payload = {
            title,
            status:false,
            id:uuid()
        };
        setData([...data,payload]);
    }
    const handleDelete = id =>{}
    const handleToggle = id =>{
        const updatedTodo = data.map((item)=>((item.id === id )? {...item,status: !item.status}:item))
        setData(updatedTodo); 
    } 
  return (
    <>
        <h1>Todo</h1>
        <TodoInput onClick={handleAdd} />
        {data.filter((item)=>(showAll? true: !item.status)).map((item)=>(<><TodoList handleDelete = {handleDelete} handleToggle ={handleToggle} key={item.id} {...item} /></>))}
        <button onClick={()=>setShowAll(!showAll)}>
            {showAll ? "SHOW ONLY UNFINISHED TASK" : "SHOW ALL TASK" }
        </button>    
 
    </>
  )  
}

export default Todo