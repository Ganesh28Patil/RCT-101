import './App.css';
import ChildToParent from './CounterApp/component/ChildToParent';
import ParentToChild from './CounterApp/component/ParentToChild';
import Siblings from './CounterApp/component/Siblings';

function App() {
  return (
    <div className="App">
        <h1>State Uplifting</h1>
        <ParentToChild />
        <ChildToParent />
        <Siblings />
    </div>
  );
}

export default App;
