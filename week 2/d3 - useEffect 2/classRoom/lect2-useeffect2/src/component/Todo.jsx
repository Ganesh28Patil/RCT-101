import React,{useEffect,useState} from 'react'
import axios from "axios";

const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        // effect
       /*
        const getTodo = async ()=>{
            // let r = await fetch("http://localhost:8080/todoData");
            // let data = await r.json();
            // console.log('data:', data);

            let r = await axios.get("http://localhost:8080/todoData");
            let data = r.data;
            let totalEle = Number(r.headers["x-total-count"]);
            console.log('data:', data);
            setTodos(data);
        }
         getTodo();
        */
        
         axios.get(`http://localhost:8080/todoData?_page=${page}&_limit=${limit}`)
         .then((r)=>{
             setTodos(r.data);
             setTotalCount(Number(r.headers["x-total-count"]));
        });
       
        /*return () => {
            // cleanup
         }; */

    }, [page,limit]);
  return (
         <>
             <h1>Todo</h1>
             <div>
                  <button disabled={page <= 1} onClick={()=>((page>1)?setPage(page - 1):"")}>{`<`}</button>
                  <select onChange={(e)=>(setLimit(Number(e.target.value)))}>
                      <option value={5}>5</option>
                      <option value={15}>15</option>
                      <option value={30}>30</option>
                      <option value={120}>120</option>
                  </select>
                  <button disabled={totalCount < page * limit } onClick={ ()=>setPage(page + 1)}>{`>`}</button>
             </div>
             <div>
                  {
                      todos.map((item,index)=>(<h2 key={item.id}>{index+1} ) {item.txt}</h2>))
                  }
             </div>
             

             

         </>
  )
}

export default Todo