import React, { useState } from 'react';
import './App.css';
import IncrementTimer from './component/IncrementTimer';

function App() {
  const [active, setActive] = useState(false);
  const [form,setForm] = useState({
    start:"",
    end:""
  });
  const onSubmit = (e)=>{
    e.preventDefault();
    // console.log(form.start,form.end);
    if(!active) setActive(!active);
  }
  const handleChange = (e) =>{
      let {name,value} = e.target;
      // console.log(name,value);
      setForm({...form,[name]:Number(value)});
      setActive(false);
     
  }
 
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <input type="text" onChange={handleChange} name="start" value = {form.start} placeholder="Enter Start Value"  />
          <input type="text" onChange={handleChange} name="end" value = {form.end} placeholder="Enter End Value"  />
          <input type="submit"  />
      </form>
     { (active) ?  <IncrementTimer start={form.start} end ={form.end}   /> : "Please Enter Data"}
    </div>
  );
}

export default App;
/*
increment timer (I)
create a simple component Timer
it should take initial time (second) as prop
it should take end time (second) as prop as well
the time should be displayed and incremented every second
on reaching end time, it should clear the interval
write a cleanup function as well
 */