import React from 'react'

const Forms = () => {
    const initailState = {
        firstName:"",
        email:"",
        age:""
    }
    const [data,setData] = React.useState(initailState);
    const handleChange =(e) =>{
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }
    const {firstName,email,age} = data;
    const handleClick = () =>{
        console.log(data);
    }
  return (
        <>
              <h6>------ Forms -------</h6>
              <input value={email} name='email' placeholder='Enter email' onChange={handleChange}/> <br  />
              <input value={firstName} name='firstName' placeholder='Enter firstName' onChange={handleChange}/> <br />
              <input value={age} name='age' placeholder='Enter age' onChange={handleChange}/> <br />
              <button onClick={handleClick}>Add</button>
        </>
  )
}

export default Forms