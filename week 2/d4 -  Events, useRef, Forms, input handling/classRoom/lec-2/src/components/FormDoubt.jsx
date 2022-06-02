import React, { useEffect, useState } from 'react'
// mapping input with unique identifier
// onChange i m getting unique identifier & latest value
// updating form where key = unique identifier & value = new Value
const FormDoubt = () => {
    const [form, setForm] = useState({}); 
    // here we are giving inital value as empty object, becoz we are not going to make use predefined value in this form case.
    // ham tabh initaial value dete hai, jabh hame usko show karna hoga otherwise we don't.
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form : ",form);
        console.log("form UserName : ",form.username);
    }
  return (
      <>
          {/* <h2>FormDoubt</h2> */}
          <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : <input type='text' name='username'  onChange={handleChange} placeholder='Enter Name'  /></label>
                </div>
                <div>
                    <label>Age : <input type='number' name = 'number'  onChange={handleChange} placeholder='Enter Age'  /></label>
                </div>
                <div>
                    <label>Email : <input type='email' name = 'email'  onChange={handleChange} placeholder='Enter Email'  /></label>
                </div>
                <div>
                    <label>Password :  <input type='password' name = 'password'  onChange={handleChange} placeholder='Enter Password'  /></label>
                </div>
                <div>
                    <label><input type='checkbox' name = 'isIndian' checked={form.isIndian} onChange={handleChange} /> : Indian </label>
                </div>
                <div>
                    <label><input type='radio' name = 'gender'  onChange={handleChange} /> : MALE </label>
                </div>
                <div>
                    <label><input type='radio' name = 'gender'  onChange={handleChange} /> : FEMALE </label>
                </div> 
                <div>
                    <label>Marital Status : <select name="maritalStatus"  onChange={handleChange}>
                                                    <option value="">😄</option>
                                                    <option value="married">MARRIED</option>
                                                    <option value="unmarried">UNMARRIED</option>
                                                    <option value="divorce">DIVORCE</option>
                                            </select>
                    </label>
                </div>
                <div>
                    <label>City : <select name="city"  onChange={handleChange}>
                                                    <option value="">✈️</option>
                                                    <option value="mumbai">MUMBAI</option>
                                                    <option value="pune">PUNE</option>
                                                    <option value="delhi">DELHI</option>
                                            </select>
                    </label>
                </div>
                <div>
                    <label>Resume : <input type='file' accept="image/png, image/jpeg, application/pdf" name = 'resume' files= {form.resume}  onChange={handleChange}/></label>
                </div> 
                <div>
                    <input type="submit"  />
                </div>              
          </form>

      </>
  )
}

export default FormDoubt