
import "./style.css"

import  React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Start from "./pages/Start"
import Story from "./pages/Story"
import About from "./pages/About"
export const portalContext=React.createContext()
export const paragrafNavContext=React.createContext()

function App() {
  const[showPortal,setShowPortal]=useState(false)
  const[currentIndex,setCurrentIndex]=useState(0);
  
  return(
      <div>
          
      
            <portalContext.Provider value={[showPortal,setShowPortal]}>
            <paragrafNavContext.Provider value={[currentIndex,setCurrentIndex,]}>
            <BrowserRouter>
              <Routes >
                <Route element={<Nav/>}>
                  <Route index path="/" element={<Start/>}/>
                  <Route  path="/home" element={<Start/>}/>
                  <Route path="/story" element={<Story/>}/>
                  <Route path="/about" element={<About/>}/>
                </Route>
              </Routes>
            </BrowserRouter>
            </paragrafNavContext.Provider>
            </portalContext.Provider>
        </div>
  )
}

export default App;
