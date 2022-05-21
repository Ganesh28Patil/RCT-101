import React from 'react'

const initialState = {
    name:"",
    email:"",
    password:""
};
const Form = () => {
    const [state,setState] = React.useState(initialState);

    const {name,email,password} = state;
    const handleChange = (e) =>{
            // console.log(e.target,e.target.value,e.target.name);
            const {name, value} = e.target;
            setState({
                ...state,[name]:value
            })        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Data is ",state);
       
    } 
  return (
    <>
       
        <div> <div>Form</div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={name} name = 'name' onChange={handleChange} placeholder='name' />
                <br />
                <input type="email" value={email} name = 'email' onChange={handleChange} placeholder='email' />
                <br />
                <input type="password" value={password} name = 'password'  onChange={handleChange} placeholder='password' />
                <br />
                <input type="submit" value = 'SUBMIT DATA' />
            </form>
        </div>
    </>
  )
}

export default Form;

//  here we learn we can make handle mutiple input using single hangleChange