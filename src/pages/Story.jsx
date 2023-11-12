import React, { useContext } from 'react';
import { paragrafNavContext } from '../App';
import ParagrafNav from '../Components/ParagrafNav';
import paragraf from "../paragraf.json"
import Main from '../Components/Main';
import Portal from '../Components/Portal';
import ChatBot from '../Components/ChatBot';


function Story(props) {
    const[currentIndex,setCurrentIndex]=useContext(paragrafNavContext)
    return (
        <div>
            <div className="mainBody">
              
              <div className="selectParagraf">
                <select onChange={(e)=>{
                  
                  setCurrentIndex(e.target.selectedIndex)
                }}>
                  
                  {paragraf.map((p,key)=>{
                 
                    return(
                      <option key={key} value={key}>{p.title}</option>
                    )
                  })}
                </select>
              </div>
              <Main/> 
              <div className="navPlaceholder">-</div>
              <ParagrafNav/>
              <ChatBot/>
          </div>
          <Portal/>
        </div>
    );
}

export default Story;