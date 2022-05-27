import React from 'react'



const Todo = () => {
    const [data, setData] = React.useState([]);
    const [loading,setLoading] = React.useState(false);
    const [isError,setIsError] = React.useState(false);

React.useEffect(() => {
    // effect
    fetch("http://localhost:8080/todos")
    .then((r)=>(r.json())).then((d)=>{console.log("d: ",d)})
    return () => {
        // cleanup
    };
}, []);

  return (
    <>
    <div>Todo</div>
    <input placeholder="Enter Somthing" />
    <button>Add</button>    
    </>
  )
}

export default Todo