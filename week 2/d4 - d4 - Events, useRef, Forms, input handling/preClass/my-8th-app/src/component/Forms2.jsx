import React from 'react'
const initailState = {
    name:"",
    email:"",
    isMarried:"",
    gender:"",
}
const Forms2 = () => {
   const [formData,setFormData] = React.useState(initailState);
   const {name,email,isMarried,gender} = formData;
   const fileReff = React.useRef();
   const handleChange =(e)=>{
      
      let {name,value,checked,type} = e.target;
      value = (type === "checkbox") ? checked : value; 
      setFormData((prev)=>({...prev,[name]:value}));
   }
   const onSubmit = (e)=> {
        e.preventDefault() ;
        console.log(formData);
        console.log(fileReff.current.files[0]);
        console.log("Doc-Name : ",fileReff.current.files[0].name);
   }
  return (
      <>
         <h6>---- Forms2 ----</h6>
         <div>
             <h4>Form : Personal Details</h4>
             <form onSubmit={onSubmit}>
                 <lable>Name: <input onChange={handleChange} value={name} name="name" type="text" /></lable><br  />
                 <lable>Email: <input onChange={handleChange} value={email} name="email" type="email" /></lable><br  />
                 <lable> <input onChange={handleChange} checked = {isMarried} name="isMarried" type="checkbox" /> Married </lable><br  />
                 <lable>Gender: <select onChange={handleChange} value={gender} name="gender">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="D">Do not want to Disclose</option>
                                </select>
                 </lable> <br  />
                 <label>Upload Photo : <input type="file" ref={fileReff} />
                 </label>
                 <input type="submit"  />    
             </form>
         </div>

      </>
  )
}

export default Forms2