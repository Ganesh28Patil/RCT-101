import React from 'react'

const PrintList = () => {
  return (
    <>
    <div style={{border:"1px solid blue",width:"25%",margin:"auto",marginBottom:20,}}>
    <h2>PrintList | How to Print List</h2>
        <h3>List of Items</h3>
        <div>
          { [1,2,3].map((items)=>(
              <h3>{items}</h3>
          ))}
        </div>
    </div>

    </>
  )
}

export default PrintList

// basic how to display list on console using map function