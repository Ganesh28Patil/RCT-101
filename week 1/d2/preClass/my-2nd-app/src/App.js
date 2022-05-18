import './App.css';
import './test.css'
let style1 = {
  color:"yellow",
  padding:"5px",
  fontSize:"30px",
  backgroundColor:"red",
  margin:'10px'
}
let style2 ={
  cursor:"pointer",
  borderRadius:"10px",
  color:"white",
  padding:"10px"
}
let style3 = 'test1';
let style4 = 'test2';
function App() {
  return ( 
    <>
     <div className="App">
         <div>   <button style={style1}>One</button>   </div>
         <div>   <button style={{fontSize:100, background:"cyan"}}>Two</button>   </div>
         <div>   <button style={{...style1,...style2}}>Three</button> </div>
         <div>   <button className="three four">four</button>  </div>
         <div>   <button className={`${style3} ${style4}`}>Five</button>  </div>
    </div>
    </>
  );
}

export default App;
