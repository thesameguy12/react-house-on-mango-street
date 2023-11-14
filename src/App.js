
import "./style.css"

import  React, { useState } from "react";


import Story from "./pages/Story"

export const portalContext=React.createContext()
export const paragrafNavContext=React.createContext()

function App() {
  const[showPortal,setShowPortal]=useState(false)
  const[currentIndex,setCurrentIndex]=useState(0);
  
  return(
      <div>
            <portalContext.Provider value={[showPortal,setShowPortal]}>
            <paragrafNavContext.Provider value={[currentIndex,setCurrentIndex,]}>
              
            <Story/>
            </paragrafNavContext.Provider>
            </portalContext.Provider>
        </div>
  )
}

export default App;
