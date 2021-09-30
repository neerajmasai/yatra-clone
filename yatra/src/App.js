<<<<<<< HEAD
import {Homepage} from './Components/Homepage/Homepage'
import "./App.css";
=======
import React from 'react';

import './App.css';
>>>>>>> 9a4c0ad21b7d8e81b0363859713ec3d48fd71d78

import { RightSection } from './Components/Homepage/RightSection/RightSection';

function App() {
  
  return (
<<<<<<< HEAD
    <div >
 
      <Homepage/>

       
=======
    <>
    <div className="App">
      <div className="header" style={{ width: "100vw", height: "70px", textAlign: "left", left: "0", position: "fixed", zIndex: "1", backgroundColor: "lightpink" }}>Navbar</div>
      <div className="body" style={{ display: 'flex', backgroundColor: "lightgray", maxWidth: "1440px" }}>
        <div className="LeftSection" style={{ width: "45%", marginTop: "70px", backgroundColor: "gray", height: "100vh" }}>LeftSection</div>
        <RightSection />
      </div>
>>>>>>> 9a4c0ad21b7d8e81b0363859713ec3d48fd71d78
    </div>
    
    </>
  );
}

export default App;
