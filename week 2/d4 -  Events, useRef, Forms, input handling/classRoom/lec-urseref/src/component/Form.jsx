import React, { useState } from 'react'

const Form = () => {
const [form, setForm] = useState({
    username:"",
    email:"",
    password:"",
    age:0,
    isIndian:false,
})
  const  handleOnChange =(e)=>{   
    let{name,value,checked,type} = e.target;
    console.log(name,value,checked,type);
    if(type === "checked"){

    }else{
        setForm({
            ...form,
            [name]:checked,
            })
    }
    setForm({
        ...form,
        [name]:value,
        })

  }
  return (
    <>
        <h1>Form</h1>
        <form>
            <div>
                <label>Name :</label>
                <input 
                    type="text"
                    name="usename" 
                    placeholde="Enter name...."
                    value={form.username}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <label>Age :</label>
                <input 
                    type="number"
                    name="age" 
                    placeholde="Enter age...."
                    value={form.username}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <label>Email :</label>
                <input 
                    type="email"
                    name="email" 
                    placeholde="Enter email...."
                    value={form.email}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <label>Password :</label>
                <input 
                    type="number"
                    name="age" 
                    placeholde="Enter age...."
                    value={form.username}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <label>Password :</label>
                <input 
                    type="number"
                    name="password" 
                    placeholde="Enter Password...."
                    value={form.password}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <input 
                    type="checkbox"
                    name="isIndian"                    
                    value={form.isIndian}
                    onChange={handleOnChange}
                />
            </div>

            <div>
                    <input 
                         type="radio"
                         name="gender"                    
                         value={"Male"}
                         onChange={handleOnChange}
                     />
                     <label>MALE </label>
            </div>        
            <div>
                 
                 <input 
                    type="radio"
                    name="gender"                    
                    value={"Female"}
                    onChange={handleOnChange}
                />
                 <label>FEMALE </label>
               
            </div>
        </form>

    </>
  )
}

export default Form