//import logo from './logo.svg';
// import { useEffect,useState} from 'react';
import './App.css';

// import React, { useState } from "react";
import "./index.css";
// import Child from './Components/Child';
// import User from './Components/User';
import axios from 'axios';


function App() {

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


export default App;
