import React, { useState } from 'react'

import './App.css';
// import About from './componentsnpm/About';
import Header from './components/Header';
import TextForm from './components/TextForm';

// import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light")


  const [theme, setTheme] = useState("")


  const togglePink = () => {
    setTheme("pink")
  }
  const toggleGreen = () => {
    setTheme("green")
  }
  const toggleYellow = () => {
    setTheme("yellow")
  }
  const toggleWhite = () => {
    setTheme("white")
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "gray";
      document.body.style.color = "white";

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }




  return (
    <>
      {/* <BrowserRouter> */}
    
          <Header title="WordProcessor" about="About WP" search='Search here' mode={mode} toggleWhite={toggleWhite} togglePink={togglePink} toggleYellow={toggleYellow} toggleGreen={toggleGreen} toggleMode={toggleMode} />
        {/* <Routes> */}
            {/* <Route path="/" element={  }/> */}
            <TextForm formTitle="Text Form" info="Enter text in below to analyze:" theme={theme} />
            {/* <Route path="/about" element={ <About />}/> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}

    </>

  );
}

export default App;

