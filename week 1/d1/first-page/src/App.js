// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Dost from './components/Dost';
// component -> Function that return JSX
// JSX code, HTML inside JS
function App() {
  // Passing Variables
  let info =[
    {name:"Ganesh",place:"Maharashtra"},
    {name:"Hament",place:"Oman"},
    {name:"Rahul",place:"Chennai"},
    {name:"Akash",place:"Banglore"},
    {name:"Sachin",place:"Delhi"},
    {name:"Wahid",place:"Mumbai"},
    {name:"Ayaz",place:"Nepal"},
  ];
  return (
    <div className="App">   
        <Hello />
        {/* <Dost name="Ganesh" place = "Maharashtra" /> 
        <Dost name="Hemant" place = "Uttar Pradesh" /> 
        <Dost name="Wahid" place = "Kerala" />  */}
        {/* <Dost {...info[0]} /> <Dost {...info[1]} />  <Dost {...info[2]} /><Dost {...info[3]} /> <Dost {...info[4]} /> <Dost {...info[5]} /> <Dost {...info[6]} /> */}
       {
            info.map((user)=>( 
           <div key = {user.name}>
              <Dost {...user}/>
           </div>
            ))
       }
        
    </div>
  );
}

export default App;
