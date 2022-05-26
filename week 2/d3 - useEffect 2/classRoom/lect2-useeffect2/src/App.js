import './App.css';
import StopWatch from './component/StopWatch';
import Stopwatch2 from './component/Stopwatch2';
import Timer from './component/Timer';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
       <Stopwatch2  />
      <h3>-----------------</h3>
       <StopWatch  />
      <h3>-----------------</h3>
      <Timer />
      <h3>-----------------</h3>
      <Todo  />
    </div>
  );
}

export default App;
