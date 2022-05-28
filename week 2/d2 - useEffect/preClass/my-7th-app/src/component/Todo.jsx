import React from 'react'

const Todo = () => {
  const [text,setText] = React.useState("");
  const [data,setData] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(true);
  const [isError,setIsError] = React.useState(false);
  const [page,setPage] = React.useState(1);
  // let lastPage = data.length;
  React.useEffect(() => {
    getData(page);   
  }, [page]);

 
  const getData = (page = 1) =>{
    setIsLoading(true);
  
    
    return  fetch(`http://localhost:8080/todos?_page=${page}&_limit=4`)
               .then((res)=>(res.json()))
                .then((d)=>(setData(d)))
                  .catch((err)=>(setIsError(true)))
                    .finally(()=>(setIsLoading(false)))
  }
  
  const addData = (text)=>{
    setIsLoading(true);
    const payload = {
      text,
      iScompleted:false
    }
    return  fetch("http://localhost:8080/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(payload)
              })
               .then((res)=>(res.json()))
                .then((d)=>(getData()))      // note this step
                  .catch((err)=>(setIsError(true)))
                    .finally(()=>(setIsLoading(false)))
  }   
  return (
   <>
     {
        (isLoading) ? (<b>...loading</b>) : (isError) ?  (<b>Somthing went wrong</b>) :  
       (<div>
              
            <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add something ..."/>
            <button onClick={()=>addData(text)}>Add</button>
            <ul>{data.map((item)=>(<li key={item.id}>{`${item.text}`}</li>))}</ul>
            <div>
               
               
                <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
                <i>Page : {page} </i> 
                <button onClick={()=>setPage(page+1)}>NEXT</button>
            </div>
           
       </div>)
     }
   </>
  )
}

export default Todo


