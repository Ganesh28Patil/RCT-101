import './App.css';
import Task from './components/Task';
import List,{List2} from './components/List';

function App() {
  let info = [{brand:"Android",company:"Samsung"},{brand:"Blackbery",company:"HTC"},{brand:"iPhone",company:"Micromax"},{brand:"Windows",company:"Apple"}];
  
  return (
    <>
    <div className="App"> 
        <h1 className='hTxt'>REACT MOBILE OS</h1>
        <Task data = {"Operating System"}/>    
        <div className='ListTxt'>
        {
            info.map((user)=>( 
           <div key = {user.data}>
              <List {...user}/>
           </div>
            ))
       }
       </div>      
       
        <Task data = {"Manufacturers"}/>

        <div className='ListTxt'>
        {
            info.map((user)=>( 
           <div key = {user.company}>            
              <List2 {...user}/>
           </div>              
            ))
       }
       </div>  
      </div> 
    </>
  )    
}

export default App;



  //  {/* (user.company === "Samsung" || user.company === "HTC") ? 
  //          ( <div key = {user.company}>
  //             <List2 {...user}/>  </div>) : (user.company === "Apple" ) ? 
  //               (<div key = {user.company}>
  //                               <List2 {...user}/>
  //                           </div>)  : 
  //              (<div key = {user.company}>
  //                  <List2 {...user}/>
  //              </div>) */}
/*
 (user.company == "Samsung" || user.company == "HTC") ? 
 (<div key = {user.company}>
   <List2 {...user}/>  </div>) :

    (user.company == "Apple" ) ? 
    ( <div key = {user.company}>
                     <List2 {...user}/>
                 </div> ) : 
    (<div key = {user.company}>
        <List2 {...user}/>
    </div>)

*/

// {/* if(user.company == "Samsung" || user.company == "HTC") {
//                 <div key = {user.company}>
//                     <List2 {...user}/>
//                 </div>
//             ))
//               }else if(user.company == "Apple" ){
//                 <div key = {user.company}>
//                     <List2 {...user}/>
//                 </div>
//               }else{
//                 <div key = {user.company}>
//                     <List2 {...user}/>
//                 </div>
//               } */}


