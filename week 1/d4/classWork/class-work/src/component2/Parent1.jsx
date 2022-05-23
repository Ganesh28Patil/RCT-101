import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent1 = () => {
    // state upleafting
    const [info,setInfo] = React.useState("");
  return (
    <>
        <div>Parent1 : {info}</div>
        <ChildA info={info} setInfo={setInfo} />
        <br />A
        <br />B
        <br />C
        <ChildB info={info} />
    </>
  )
}

export default Parent1