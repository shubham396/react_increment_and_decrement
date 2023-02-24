//import logo from './logo.svg';
import { useEffect,useState} from 'react';
import './App.css';

// import React, { useState } from "react";
import "./index.css";
// import Child from './Components/Child';
// import User from './Components/User';
import axios from 'axios';


function App() {

  const [myData, setMyData] =useState([]);

  // Note: using promises


  useEffect (() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then((res) => console.log(res.data))
    .then((res)=> setMyData(res.data))
  
    // .catch((error)=> console.log(error));
    // .then((res) =>
    // console.log(res.data));
    

  }, []);
  return( 


    <>
    
    <h1 align="center"> Axios </h1>
    <div className="grid">
    {myData.map((post) => {
      
      const {id, title, body} = post;
      return <div className="card" key={id}>
        <h2>{title}</h2>
        <p>{body.slice(0,100)}</p>
      </div>
      
    }
    
    

    )}
    </div>
{/*     
  <User />
  <Child  text="hello my name is shubham Bhaskar "/>
   */}
   </>
);
  }


//   const [count, setCount] = useState(1); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

//   function ment() {
//     //setCount(prevCount => prevCount+=1);
//     setCount(function (prevCount) {
//       return (prevCount += 1);
//     });
//   }

//   function decrement() {
//     setCount(function (prevCount) {
//       if (prevCount > 0) {
//         return (prevCount -= 1); 
//       } else {
//         return (prevCount = 0);
//       }
//     });
//   }

//   return (
// //  
//     
//     <div className="App"> 
//       <h1>
//         {count} 
//        </h1>
//       <button onClick={ment} style={{ backgroundColor: " rgba(209, 26, 133, 0.866)" }  } >Increment</button>
//       <button onClick={decrement} style={{ backgroundColor: "  rgba(193, 102, 167)" }}>Decrement</button>
//     </div>

  

  
  
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );



export default App;
