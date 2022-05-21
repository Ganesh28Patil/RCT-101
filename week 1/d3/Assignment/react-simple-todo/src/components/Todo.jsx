// Todo.jsx (contains the input elements, and TodoList )
import React from 'react'
import styles from './todo.module.css';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
import TodoItem from './TodoItem';
const Todo = () => {
    const [txt,setTxt] = React.useState("");
    // console.log('txt:', txt);
    const [data,setData] = React.useState([]);
    // console.log('data:', data)
    const taskDone = (todoToken)=>{      
        console.log('todoToken:', todoToken)
    //   { `${ button.setAttribute("class", "democlass");}`}
        // setData(data.forEach((obj)=>()));
        // setData(data.forEach((obj)=>{(obj.key === todoToken)?(but    ton.setAttribute("className","circleDone"):void}))
        // setData(data.forEach((obj)=>((obj.key === todoToken)?(button.id="circleDone"):null )))
        // data.forEach((obj)=>((obj.key === todoToken)?(<><button id="circleDone"></button></>):(<><button id="circleDone"></button></>) ))

      
        // setData(data.filter((ele)=>(ele === todoTxt)));

    }
    
  return (
    <>  
       <h1>Todo</h1> 
       <div className={styles.box}>
            <div>
            
                  {/* <TodoList data={data} key = {data.id} /> */}
                  <TodoList>
              
                  {data.map((item)=>(<><TodoItem code={item.id} item={item.txt} done={taskDone} /></>))}
                  </TodoList>

            </div>          
            <div className={styles.frame} id={styles.gray} >
                <input value={txt} onChange={(e)=>(setTxt(e.target.value))} className={styles.input} type="text" placehoalder="Add Somthing" />
                <button onClick={()=>{setData([...data,{txt:txt,id:uuidv4()}]);setTxt("")}}  className={styles.pluse}>+</button>
            </div>
       </div>
    </>
  )
}

export default Todo