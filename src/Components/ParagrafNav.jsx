import React,{useState,useEffect, useContext} from 'react';
import { paragrafNavContext } from '../App';
import paragraf from "../paragraf.json"

function ParagrafNav(props) {
    const[showLeft,setShowLeft]=useState(false);
  const[showRight,setShowRight]=useState(true);
  const[currentIndex,setCurrentIndex]=useContext(paragrafNavContext)
  const maxIndex=paragraf.length;
  useEffect(()=>{
    if(currentIndex===maxIndex-1){
        setShowRight(false)
    }else{
        setShowRight(true)
    }
    if(currentIndex===0){
        setShowLeft(false)
    }else{
        setShowLeft(true)
    }
},[currentIndex,maxIndex])
    return (
        <div>
            <div className="paragrafNav">
                <button className='arrowButton' style={{"visibility":showLeft?"visible":"hidden"}}><svg onClick={()=>{
                    if(currentIndex!==0){
                        setCurrentIndex(currentIndex-1)
                    }
                }} className='arrow Left' data-name="Back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Previous</title><path d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z"/></svg></button>
                <p className='indexIndicator'>{currentIndex+1}/{maxIndex}</p>
                <button className='arrowButton' style={{"visibility":showRight?"visible":"hidden"}}><svg onClick={()=>{
                    if(currentIndex<maxIndex){
                        setCurrentIndex(currentIndex+1)
                    }
                }} className='arrow Right' data-name="Next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Next</title><path d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z"/></svg></button>
            </div>
        </div>
    );
}

export default ParagrafNav;