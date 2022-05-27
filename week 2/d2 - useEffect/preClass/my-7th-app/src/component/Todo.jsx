import React from 'react'



const Todo = () => {
    const [title,setTitle] = React.useState() ;
    const [data, setData] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
    const [isError,setIsError] = React.useState(false);


React.useEffect(() => {
    // effect
   getData();
    return () => {
     // cleanup
    };
}, []);
  const getData = (data) => {
        setIsLoading(true);
        return   fetch("http://localhost:8080/todos")
                   .then((r)=>(r.json()))
                     .then((d)=>{console.log("d: ",d);setData(d)})
                     .catch((error)=>setIsError(false))
                       .finally(()=>setIsLoading(false))
  }

  const addData = (title) =>{
    const payLoad = {
      title,
      status:false,
    }
         setIsLoading(true);
          return   fetch("http://localhost:8080/todos",{
                     method:"POST",
                     headers:{"Content-Type":"application/json"},
                     body:JSON.stringify(payLoad),
                   })
                     .then((r)=>(r.json()))
                      //  .then((d)=>{console.log("d: ",d);setData(d)})
                        .then((d)=>(getData())) 
                         .catch((error)=>setIsError(false))
                           .finally(()=>setIsLoading(false))
  }

  return (
    <>
     {
       (isLoading) ?
        (<h6>  ..... Loading </h6>) :
         (isError) ?
          (<h5> Something went wrong </h5>) :         
            (
              <>
              <div>
                 <div>Todo</div>
                 <input value={title}  onChange = {()=>setTitle(()=>((e)=>(e.target.value)))} placeholder="Enter Something"/>
                 <button onClick={()=>addData(title)}>Add</button>  
              </div>
              <div>
                  {
                    data.map((item)=>(<li key={item.id}>{item.text}</li>))
                  }
              </div>
              </>
            )
      }
    </>
  )
}

export default Todo