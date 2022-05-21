import React from 'react'

const ListItem = ({title,id,status,handleDelete}) => {

  if(title === 'Hidden') return null
    
  return (
    <>
        {/* <div>ListItem</div> */}
        <div style={{width:"50%",display:"flex",justifyContent:"space-around",border:"1px solid black",padding:10,margin:20,marginLeft:"25%"}} >
            <h2> {title} </h2>
            <button onClick={()=>(handleDelete(id))} >Delete</button>
        </div>
       
    </>
  )
}

export default ListItem

// 