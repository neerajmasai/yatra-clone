import React from 'react';

import './App.css';

import { RightSection } from './Components/Homepage/RightSection/RightSection';

function App() {
  return (
    <>
    <div className="App">
      <div className="header" style={{ width: "100vw", height: "70px", textAlign: "left", left: "0", position: "fixed", zIndex: "1", backgroundColor: "lightpink" }}>Navbar</div>
      <div className="body" style={{ display: 'flex', backgroundColor: "lightgray", maxWidth: "1440px" }}>
        <div className="LeftSection" style={{ width: "45%", marginTop: "70px", backgroundColor: "gray", height: "100vh" }}>LeftSection</div>
        <RightSection />
      </div>
    </div>
    
    </>
  );
}

export default App;
