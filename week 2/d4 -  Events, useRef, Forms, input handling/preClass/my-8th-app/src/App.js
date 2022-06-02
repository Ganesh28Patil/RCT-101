import './App.css';
import ConditionalRendering from './component/ConditionalRendering';
import Event from './component/Event';
import FilesUpload from './component/FilesUpload';
import Forms from './component/Forms';
import Forms2 from './component/Forms2';
import Timer from './component/Timer';

function App() {
 
  return (
    <div className="App">
      <h3>Events, useRef, Forms & More</h3>
          <div><Forms2  /></div>
          <div><FilesUpload  /></div>
          <div><Timer  /></div>
          <div><Event  /></div>
          <div><Forms  /></div>
          <div><ConditionalRendering  /></div>
    </div>
  );
}

export default App;
