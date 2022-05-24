import React from 'react'

const Todos2 = () => {
  const [todos,setTodos] = React.useState([]);
  const [newTodo,setNewTodo] = React.useState("");

  const saveInfo = () => {
    fetch(" http://localhost:3000/todos",
    {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        text:newTodo,
        isCompleted:false,
      })
    })
    .then((r)=>r.json())
    .then((d)=>{
      setTodos([...todos,d]);
      setNewTodo("")
    })
  }
  React.useEffect(()=>{
    fetch("http://localhost:1111/todos")
    .then((r)=>r.json())
    .then((d)=>{      
      // console.log("d: ",d);
      setTodos(d);
    })
  },[]);
  return (
   <>
         <h1>Todos2</h1>

         <input value = {newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
         <button onClick={saveInfo}>+</button>
         <ol>{
           todos.map((items)=>(<li key={items.id}>{items.text}</li>))
         }
         </ol>
   </>
  ) 
}

export default Todos2