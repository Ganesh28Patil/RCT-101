import './App.css';
import React from 'react';
import List from './Component/List/List';
import Form from './Component/EmpData/Form';
// Lists & Keys
// arrays of items

function App() {

  const [isAuth,setIsAuth] = React.useState(false);
  const handleLogin =()=>{
    setIsAuth(true);
  }
  const isError = false;
  const isLoading = false;
/*  
// simple way conditional statement
  if(!isAuth){
    return(
      <>
        <div>
          <h2>User is Not Logged In, Please 
          <button style={{margin:15,fontSize:40,padding:10}} onClick={handleLogin}>Login</button> </h2>
        </div>
      </>
    )
  }  
  */
// ternaray operator 
  return  (!isAuth) ?
          (
            <>
               <div>
                 <h2>User is Not Logged In, Please 
                 <button style={{margin:15,fontSize:40,padding:10}} onClick={handleLogin}>Login</button> </h2>
               </div>
             </>
          ) : 
          (isLoading) ?
           (
             <h3>. . . . . . Loading 🛬</h3>
           ) : 
          (isError) ? 
          (
             <h2> 😵‍💫 something went wrong</h2>
          ) :
          (
            <div className="App">
              <List />
              <Form />
            </div>
          );
}

export default App;
// conditional rendering
// based on some condition, we  want to render a component
// different component
// if true -> A, if false -> B