import React from 'react';
import { useEffect } from 'react';

import { useContext } from 'react';
import { paragrafNavContext, portalContext } from '../App';
import paragraf from '../paragraf.json';
function Portal(props) {

    const [showPortal,setShowPortal]=useContext(portalContext)
    const[currentIndex]=useContext(paragrafNavContext)

    const audio=new Audio("./2019-04-20_-_Quiet_Time_-_David_Fesliyan.mp3");
    audio.crossOrigin = 'anonymous';
    useEffect(()=>{
        if(showPortal){
            audio.play()
        }
        
    })
    
    return (
        <div className='portal' style={{"display":showPortal?"block":"none"}} >

            <div className="portalContainer">
                <button className='closeBtn' onClick={()=>{setShowPortal(false);audio.pause()}}>
                <svg className="closeIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M895.156706 86.256941a30.177882 30.177882 0 0 1 42.767059-0.180706c11.745882 11.745882 11.745882 30.870588-0.180706 42.767059L128.843294 937.743059c-11.866353 11.866353-30.930824 12.047059-42.767059 0.180706-11.745882-11.745882-11.745882-30.870588 0.180706-42.767059L895.156706 86.256941z" fill="#000000" /><path d="M86.076235 86.076235c11.745882-11.745882 30.870588-11.745882 42.767059 0.180706l808.899765 808.899765c11.866353 11.866353 12.047059 30.930824 0.180706 42.767059-11.745882 11.745882-30.870588 11.745882-42.767059-0.180706L86.256941 128.843294a30.177882 30.177882 0 0 1-0.180706-42.767059z" fill="#000000" /><path d="M0 0h1024v1024H0z" fill="#FFF4F4" fillOpacity="0" /></svg>
                </button>
                 <img lazy="true" src={paragraf[currentIndex].image} alt="" />
                 <div className='audioAnimation'>
                     <div className='au a1'></div>
                     <div className='au a2'></div>
                     <div className='au a3'></div>
                 </div>
            </div>
            
        </div>
    );
}

export default Portal;