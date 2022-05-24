import React from 'react'

const Example = () => {
const [num, setNum] = React.useState(0);

  return (
        <>
             <h1>Example {num}</h1>
             <button onClick={setNum(num+1)}>Add</button>
        </>
  )
}

export default Example