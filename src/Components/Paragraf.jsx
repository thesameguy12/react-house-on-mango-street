import React,{useContext} from 'react';
import { portalContext } from '../App';

function Paragraf(props) {
    const[showPortal,setShowPortal]=useContext(portalContext)
    return  (
        <div style={{display:props.currentIndex===props.index?"block":"none"}}>
            <div className='paragraf' >
            <h4 className='paragrafTitle'>{props.title}</h4>
                <p className='paragrafText'>
                    {props.children}
                </p>
                <div className='playContainer'>
            <button className='playButton' onClick={()=>setShowPortal(!showPortal)}>
                <svg className='playImg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 4a28 28 0 1 0 28 28A28 28 0 0 0 32 4zm10.55 30.69-13.1 8.66A3.51 3.51 0 0 1 24 40.42V23.58a3.51 3.51 0 0 1 5.45-2.93l13.11 8.66a3.23 3.23 0 0 1-.01 5.38z"  data-name="Layer 2"/></svg>
            </button>
        </div>
            </div>
            
        </div>
        
    )
}

export default Paragraf;