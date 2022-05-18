import './App.css';
import Links  from './components/Links';
import Logo from './components/Logo';
import Button from './components/Button';
function App() {
  let links = [{a:"Services"},{a:"Projects"}, {a:"About"}];
  return (
    <>
    <span className="App">
      <Logo />
      {
        links.map((user)=>(
          <div key = {user.a}>
             <Links {...user}/>
          </div>
          ))
      }     
   
      <Button />
    </span>  
    </>
  );
}

export default App;
