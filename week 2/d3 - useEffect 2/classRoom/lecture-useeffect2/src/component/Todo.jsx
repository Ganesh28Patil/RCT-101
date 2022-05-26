import React from 'react'
import axios from "axios";
const Todo = () => {
  const [page,setPage] = React.useState(1);
  const [todos,setTodos] = React.useState([]);
  const [totalCount,setTotalCount] = React.useState()
  const [limit,setLimit] = React.useState(5);
    // const getTodo = async ()={
      // let r = await axios.get("http://localhost:1112/todoData");
      // setTodos(r.data);
    // };
    React.useEffect(() => {
      // useEffect to run only one
      // 
      axios.get(`http://localhost:1112/todoData?_page=${page}&_limit=${limit}`)
      .then((r)=>{setTodos(r.data)   
      setTotalCount(Number(r.headers["x-total-count"]))  
    });
  }, [page,limit]);

  return (
   
    <>
     <div>Todo</div>
    <div className="App">        
        <button disabled={page<=1} onClick={()=>{
          if(page>1){
            setPage(page-1);
          }
        }} > {" "}{`<`}{" "} </button>
        <select onChange={(e)=> setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={110}>110</option>
        </select>
        <button 
        disabled={totalCount < page * limit} onClick={()=> setPage(page+1)}> {" "}{`>`}{" "}</button>

        {
          todos.map((item)=>(
            <>
              <div key = {item.id}>
                {item.id}{` : `}{item.txt}
              </div>
            </>
          ))
        }
    </div>
    </>
  )
}

export default Todo