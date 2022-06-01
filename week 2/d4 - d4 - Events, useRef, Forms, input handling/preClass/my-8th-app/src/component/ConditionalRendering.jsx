import React from 'react'

const ConditionalRendering = () => {
    const [isLoading,setIsLoading] = React.useState(false);
    const [isError,setIsError] = React.useState(true);
    const [show,setShow] = React.useState(false);
    const fetchData = () =>{
        setIsLoading(true);
        setIsError(false);
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    }
    const fetchDataWithError = () => {
        setIsLoading(true);
        setIsError(false);
        setTimeout(() => {
            setIsLoading(false);
            setIsError(true);
        }, 1200);
    }
  return (
    <>  
                  <h6>---- Conditional Rendering -----</h6>

      {
        (isLoading) ? (<div>...loading</div>) :
          (isError) ? 
          (<div>
                <div> something went wrong </div> 
                <button onClick={fetchData}>...do you want to fetch data Again ?</button>
          </div>) :
             (<div>
                  {/* <h6>---- Conditional Rendering -----</h6> */}
                  <button onClick={fetchData}>FETCH DATA</button>
                  <button onClick={fetchDataWithError}>FETCH DATA With Error</button> <br />
                  {/* <button onClick={()=>setShow((value) => !value)}>TOGGLE SHOWING DATE</button> */}                  
                  {/* {(show && new Date().toLocaleString())} */}

                  <button onClick={()=>setShow((value) => !value)}>
                     { show ?  "Hide 👉 " :"TOGGLE SHOWING DATE"  }
                  </button>
                  {(show) ? new Date().toLocaleString() : " 👈 Press    button  🔘    to get Hidden Date" }
             </div>)
      }  
        


    </>
  )
}

export default ConditionalRendering