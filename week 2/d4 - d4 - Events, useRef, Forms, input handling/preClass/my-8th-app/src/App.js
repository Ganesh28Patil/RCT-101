import './App.css';
import ConditionalRendering from './component/ConditionalRendering';
import Event from './component/Event';
import Forms from './component/Forms';

function App() {
 
  return (
    <div className="App">
      <h3>Events, useRef, Forms & More</h3>
          <Event  />
          <Forms  />
          <ConditionalRendering  />
    </div>
  );
}

export default App;
