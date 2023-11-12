import React, { useContext } from 'react';
import { paragrafNavContext } from '../App';
import paragraf from "../paragraf.json"
import Paragraf from './Paragraf';

function Main(props) {
    
    const [currentIndex]=useContext(paragrafNavContext)
    return (
        <div className='mainContent'>
            
            <h1 className='mainTitle'>THE HOUSE ON MANGO STREET</h1>
            {paragraf.map((p,key)=>{
                
                return(<Paragraf key={key} title={paragraf[key].title} index={key} currentIndex={currentIndex}>{paragraf[key].text}</Paragraf>)
                
            })}
            
        </div>
    );
}
 
export default Main;        