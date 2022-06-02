import React, { useEffect, useRef, useState } from 'react'
import Styles from './form.module.css';
// mapping input with unique identifier
// onChange i m getting unique identifier & latest value
// updating form where key = unique identifier & value = new Value
const Form = () => {
    const [form, setForm] = useState({
        username:"",
        age:0,
        email:"",                                       
        password:"",
        isIndian:false

    });
    const handleChange = (e) =>{
        let {type,name,value,checked,files} = e.target;
        // console.log(e); 
        // console.log("type :",type,"name : ",name,"value : ",value,"checked : ",checked);
       if(type === "checkbox"){
        setForm({...form,[name]:checked,});
       }else if(type === "file"){
        setForm({...form,[name]:files,});
       }else{
        setForm({...form,[name]:value,});
       }
    }
    useEffect(() => {
    //   first
         console.log(form);
      return () => {
        // second
      }
    }, [form])

    const nameReff = useRef();
    const passReff = useRef();
    // const resumeReff = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form : ",form);

        if(!form.username) {
            // console.log('nameReff', nameReff)
            nameReff.current.focus();
            // console.log('nameReff.current:', nameReff.current)
            nameReff.current.className += Styles.redBox;
        }else if(!form.password){passReff.current.focus();}
        //  else if(!form.resume) resumeReff.current.focus();         
    }
  return (
      <>
          {/* <h2>Form</h2> */}
          <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : <input type='text' ref={nameReff} name='username' value={form.username} onChange={handleChange} placeholder='Enter Name'  /></label>
                </div>
                <div>
                    <label>Age : <input type='number' ref={passReff} name = 'number' value={form.number} onChange={handleChange} placeholder='Enter Age'  /></label>
                </div>
                <div>
                    <label>Email : <input type='email' name = 'email' value={form.email} onChange={handleChange} placeholder='Enter Email'  /></label>
                </div>
                <div>
                    <label>Password :  <input type='password' name = 'password' value={form.password} onChange={handleChange} placeholder='Enter Password'  /></label>
                </div>
                <div>
                    <label><input type='checkbox' name = 'isIndian' checked={form.isIndian} onChange={handleChange} /> : Indian </label>
                </div>
                <div>
                    <label><input type='radio' name = 'gender' value="male" onChange={handleChange} /> : MALE </label>
                </div>
                <div>
                    <label><input type='radio' name = 'gender' value="female" onChange={handleChange} /> : FEMALE </label>
                </div> 
                <div>
                    <label>Marital Status : <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
                                                    <option value="">😄</option>
                                                    <option value="married">MARRIED</option>
                                                    <option value="unmarried">UNMARRIED</option>
                                                    <option value="divorce">DIVORCE</option>
                                            </select>
                    </label>
                </div>
                <div>
                    <label>City : <select name="city" value={form.city} onChange={handleChange}>
                                                    <option value="">✈️</option>
                                                    <option value="mumbai">MUMBAI</option>
                                                    <option value="pune">PUNE</option>
                                                    <option value="delhi">DELHI</option>
                                            </select>
                    </label>
                </div>
                <div>
                    <label>Resume : <input type='file' accept="image/png, image/jpeg, application/pdf" name = 'resume' files= {form.resume} value={form.files} onChange={handleChange}/></label>
                </div> 
                <div>
                    <input type="submit"  />
                </div>              
          </form>

      </>
  )
}

export default Form