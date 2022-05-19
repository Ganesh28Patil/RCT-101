import React from 'react';
import TodoItem from './TodoItem';
// TodoList. ( accepts the data array as props, contains the TodoItem )
const TodoList = ({data}) => {
    // console.log("data : ", data);

  return (
      <>
        <div  key ={data.id}>
            <TodoItem listItem = {data.value} />
            {/* <div>{data.value}</div> */}
        </div>
    </>
  )
}

export default TodoList