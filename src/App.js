
import "./style.css"

import  React, { useState } from "react";


//import Story from "./pages/Story"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Components/Nav";

const Home=React.lazy(()=>import("./pages/Start"));
const Main=React.lazy(()=>import("./pages/Story"));
const About=React.lazy(()=>import("./pages/About"));
export const portalContext=React.createContext()
export const paragrafNavContext=React.createContext()

function App() {
  const[showPortal,setShowPortal]=useState(false)
  const[currentIndex,setCurrentIndex]=useState(0);
  
  return(
      <div>
            <portalContext.Provider value={[showPortal,setShowPortal]}>
            <paragrafNavContext.Provider value={[currentIndex,setCurrentIndex,]}>
              <BrowserRouter basename="/test1">
              <Routes>
                <Route element={<Nav/>}>
                  <Route index path="/" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/story" element={<Main/>}/>
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
