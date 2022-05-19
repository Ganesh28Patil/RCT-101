import './App.css';
import Todo from './component/Todo';
// import TodoItem from './component/TodoItem';
// import TodoList from './component/TodoList';
/*
Todo.jsx (contains the input elements, and TodoList )
TodoList. ( accepts the data array as props, contains the TodoItem )
TodoItem.jsx (individual task)
*/
function App() {
  return (
    <div className="App">
        <Todo />
        {/* <TodoList /> */}
        {/* <TodoItem /> */}
    </div>
  );
}

export default App;
