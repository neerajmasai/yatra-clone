import "./App.css";
import React from 'react';

import { RightSection } from './Components/Homepage/RightSection/RightSection';
import { Leftsection } from "./Components/Homepage/LeftSection/Left-section";
import { Navbar } from "./Components/Header/Navbar";

function App() {
  
  return (

       
    <>
    <div className="App">
      <div className="header" style={{ width: "100vw", height: "70px", textAlign: "left", left: "0", position: "fixed", zIndex: "1", backgroundColor: "white" }}> <Navbar/> </div>
      <div className="body" style={{ display: 'flex', backgroundColor: "white", maxWidth: "1440px" }}>
        <div className="LeftSection" style={{ width: "45%", marginTop: "70px", backgroundColor: "white", height: "100vh", fontFamily:"Rubik,sans-serif !important" }}><Leftsection/></div>

        <RightSection />
      </div>
    </div>
    
    </>
  );
}

export default App;
