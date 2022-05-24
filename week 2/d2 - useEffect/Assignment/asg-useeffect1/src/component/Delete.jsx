import React from 'react'

const Delete = ({data,uId}) => {
 const onDelete =   data.filter((item)=>(item.id !== uId));
    // console.log("data",data," & ","id",uId)

  return (
    <button onClick={()=>onDelete} >Delete</button>
  )
}

export default Delete