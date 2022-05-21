// TodoList. ( accepts the data array as props, contains the TodoItem )
import React from 'react'

const TodoList = ({children,id}) => {
  return (
      <>
         {/* <div>TodoList</div> */}
         <div key={id}>{children}</div>
      </>
  )
}

export default TodoList