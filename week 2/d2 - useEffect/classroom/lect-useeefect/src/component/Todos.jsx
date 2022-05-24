import React from 'react'

const Todos = () => {
  const [newTodo,setNewTodo] = React.useState("");
  const [todos,setTodos] = React.useState([]);

 const saveInfo =()=>{
  fetch("http://localhost:8080/todos",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      text:newTodo,
      isCompleted:false,
    }),
  }).then((r)=>r.json())
  .then((d)=>{
      //  console.log(d);    
      //  setTodos(d);
      setTodos([...todos,d]);
      setNewTodo("");
    });
 }
  React.useEffect(() => { 
        fetch("http://localhost:8080/todos")
        .then((r)=>r.json())
          .then((d)=>{
              //  console.log(d);    
               setTodos(d);
            });         
  }, []);
  return (
    <>
      <h1>Todos</h1>
      <input value={newTodo} onChange={({target})=>setNewTodo(target.value)} />
      <button onClick={saveInfo}>+</button>
      {
          todos.map((todo)=>(
          <div key={todo.id}>{todo.text}</div>
            //    <edit></edit>
            // <delete></delete> 
        ))
      }
    </>
  )



}

export default Todos