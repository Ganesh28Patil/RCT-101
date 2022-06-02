import './App.css';
import Form from './components/Form';
import FormDoubt from './components/FormDoubt';
import StopwatchAdv from './components/StopwatchAdv';
import StopWatchUseRef from './components/StopWatchUseRef';

function App() {
  return (
    <div className="App">
      hello lect revision
      <h5>---- Forms without initaial value in useState  ----</h5>
      <div>  <FormDoubt  /> </div>
      <h4>---- Forms  ----</h4>
      <div><Form  /> </div>
      <h4>---- StopWatchUseRef ----</h4>
      <div><StopWatchUseRef  /></div>
      <h4>---- StopwatchAdv ----</h4>
      <div><StopwatchAdv  /></div>
     
    </div>
  );
}

export default App;
