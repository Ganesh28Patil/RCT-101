import React from 'react'
import { TaskItem } from './TaskItem';

function Task(){
  const [query,setQuery] = React.useState("");
  const[task,setTask] = React.useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value);
    const {value} =e.target;
    // setQuery(e.target.value);
    setQuery(value);

  }
  const handleTask = () => {
     const payload ={
       title: query,
       status:false
     };
     let newTasks = [...task,payload];
     setTask(newTasks);
  console.log(payload.title);


  };

  return (
    <> <h1>Task</h1>
    <div>
        <div>
            <input value={query} onChange={handleChange} placeholder='Write Somthing' />
            <button onClick={handleTask}>Add</button>
            <div>
              {
                task.map((item,index) =>{
                 // {/* return <div> {item.title} </div> */}
                  return <div> <TaskItem  color = {(index % 2 === 0) ? 'red':'blue'} {...item}/> </div>

                })
              }
            </div>
        </div>

    </div>
    </>
  )
}
export {Task};


