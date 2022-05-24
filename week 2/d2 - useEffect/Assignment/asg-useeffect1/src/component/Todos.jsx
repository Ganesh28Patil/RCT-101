import React from 'react'
import Delete from './Delete';
import Edit from './Edit';

const Todos = () => {
    const [newInp,setNewInpt] = React.useState("");
    const [inp,setInp] = React.useState([]);
    const onSave = () =>{
        fetch("http://localhost:1111/todoData",    
        {
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({
                txt:newInp,
                isCompleted:false
            })
        }
        )
        .then((r)=>r.json())
        .then((d)=>{
            setInp([...inp,d]);
            setNewInpt("");
        })

    }
    React.useEffect(()=>{
        // fetch("http://localhost:1111/data")
fetch("http://localhost:1111/todoData?_page=1&_limit=10")
        .then((r)=>r.json())
        .then((d)=>{console.log(d);setInp(d)})
},[])

  return (
    <>
        <h1>Todos</h1>
        <input value={newInp} onChange={(e)=>(setNewInpt(e.target.value))} />
        <button onClick={onSave} >save</button>

        {/* showing data on UI */}
        {
            inp.map((item)=>(<><div key = {item.id}> <Edit  /> <span key = {item.id}> id = {item.id} - {item.txt}</span>  <Delete data={inp} uId ={item.id}  />  </div></>))
        }
    </>
  )
}

export default Todos