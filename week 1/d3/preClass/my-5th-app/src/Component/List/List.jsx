import React from 'react'
import {v4 as uuid} from "uuid";
import ListItem from './ListItem';
import PrintList from './PrintList';

const List = () => {
  const [query,setQuery] = React.useState("");
  const [list,setList] = React.useState([]);
  // //  to Add the Item  in TODO List 
  const handleAdd = ()=>{
   const  playload = {
      title:query,
      status:false,
      id:uuid(),
      // id:Math.floor(100*Math.random()),
    }
    setList([...list,playload]);
    setQuery(""); // to make the input empty after click add button
  }
  //  to Delete the Item  from TODO List 
  const handleDelete =(id)=>{
    let updatedList = list.filter((data)=>(data.id !== id));
    setList(updatedList);
  }

  return (
   <>
     <PrintList />
      <div style={{border:"2px dashed red",padding:10,width:"50%",margin:"auto"}}>   
            <h1>Todo List</h1>
       {/* Input & button */}
           <div>
             <input 
               value={query} 
               onChange={(e)=>{setQuery(e.target.value)}}        
               placeholder="Add Something"
               />
               <button onClick={handleAdd}>Add</button>       
           </div>
       {/* listing TODO items */}
           <div>             
             <h3> { list.length > 0 && `Count is ${list.length}`}</h3>
             <div>
               {
                 list.map((item)=>(
                   <>
                       <div >
                           {/* <h3 key={item.id}>{item.title}</h3> */}
                           <ListItem handleDelete={handleDelete}  key={item.id} {...item} />                   
                       </div>         
                   </>
                 ))
               }
             </div>
           </div>
       </div>
  
   </>  

  )
}

export default List