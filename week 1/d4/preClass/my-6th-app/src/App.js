import './App.css';
import ChildToParent from './CounterApp/component/ChildToParent';
import ParentToChild from './CounterApp/component/ParentToChild';
import Siblings from './CounterApp/component/Siblings';
import Todo from './TodoApp/component/Todo';

function App() {
  return (
    <div className="App">
        <h1>State Uplifting</h1>
        <div className='one'>
             <Todo />
        </div>
        <hr />
       <div className='two'>
            <ParentToChild />
            <ChildToParent />
            <Siblings />
       </div>     
    </div>
  );
}

export default App;
