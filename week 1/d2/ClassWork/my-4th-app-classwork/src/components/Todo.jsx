import React from 'react'
import styles from './todo.module.css'
import TodoItem from './TodoItem';
// read input
// update todo list
// re-render todos list when updated
const Todo = () => {
      // let todos = ["hello","Gamesh","MAsai"];   
    /* const [todos,setTodos] = React.useState([
        {id:1,value:"Ganesh",isCheked:false},
        {id:2,value:"Patil",isCheked:false}
    ]); */

    const [newValue,setNewValue] = React.useState("");
    const [todos,setTodos] = React.useState([]);
    const handleChange = (e) => {setNewValue(e.target.value)}

    // Onchange of input read value,
    // store the value

    // on click of Add button,
    // read the stored value and add it to my TODO list
    const onDelete =(id)=>{
        let deleteData = todos.filter((todo) => todo.id !== id);
        setTodos(deleteData);
    }

  return (
      <>
      <div>
      <div>Todo</div>
      {/* Input tag */}
      <input 
        value={newValue}
        // whatever change happens in input tag 
        onChange={handleChange} 
        // on pressing Enter 
        onKeyDownCapture={(e)=>{if(e.key === 'Enter'){
          setTodos([...todos,{id:Date.now(),value:newValue,isCheked:false}]); //we write this id:'unique' -> for child key Error
          setNewValue("");
      }}}/>
      {/*Add button */}
      <button onClick={()=>{
        //   console.log(newValue);         
          setTodos([...todos,{id:Date.now(),value:newValue,isCheked:false}]); //we write this id:'unique' -> for child key Error
        //  setTodos([...todos,{value:newValue}]);
         setNewValue("");
          }} 
          >Add</button>
          {/*  PRINT TODOS  */}
          <div className={styles.todoList}>
         {
             todos.map((item)=>(
                 <TodoItem key={item.id} todo={item} onDelete={onDelete}/>                  
              ))  
          }
          </div>
      </div>
         
      </>
  
  )
}

export default Todo