import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import styles from './todoStyle.module.css';
import {v4 as uuidv4} from 'uuid';
  // input 
  // listing 
  // todo item
const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (newTodo)=>{
    //  todos.push(newTodo); // basic concept
    //  [...todos,newTodo] //  means spread operator (ES6)
    //  [...todos,newTodo] ===  todos.push(newTodo) 
    // both statements  are Equivalent to eachOther
    //  setTodos([...todos,newTodo]);    
     setTodos([...todos,{id:uuidv4(),value:newTodo},]);      

  }
  // console.log(todos);
   //Deleting Todo Data
   const deleteTodo = (todoEle) =>{setTodos(todos.filter((element)=> (element.value !== todoEle) ))}

  return (
    <>
      <div className={styles.todoApp}>
        <h3>TodoApp</h3>
        <TodoInput addTodo = {addTodo}/>
        {/* <TodoInput addTodo={()=>addTodo}/> */}
        {/* <TodoInput addTodo={(newTodo)=>(setTodos([...todos,newTodo]))}/> */}

            {/* <TodoList todos = {todos} /> */}
            {/* Declaretive Code */}
        <TodoList>         
            {/* {todos.map((data)=>(<TodoItem  item = {data} deleteEle = {deleteTodo} />))} */}
            {todos.map((data)=>(<TodoItem key = {data.id} item = {data.value} deleteEle = {deleteTodo} />))}
          
        </TodoList>
      </div>
    </>
  )
}

export default TodoApp;