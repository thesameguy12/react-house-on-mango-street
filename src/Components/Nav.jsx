
import React,{useEffect, useState} from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Loading from "./Loading"
function Nav(props) {
    const location=useLocation()
    const[showMenu,setShowMenu]=useState(false);
    useEffect(()=>{
        setShowMenu(false)
    },[location.pathname])
    return (
        <div>
            <button className="hamburgerButton" onClick={()=>{setShowMenu(!showMenu)}}>
            <svg className="hamburgerIcon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M362.474498 627.133204M73.591065 278.392498c-29.520337 0-53.537334-24.016996-53.537334-53.53631 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.519314-24.015973 53.53631-53.537334 53.53631L73.591065 278.392498zM73.591065 592.350003c-29.520337 0-53.537334-24.01802-53.537334-53.541427 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.523407-24.015973 53.541427-53.537334 53.541427L73.591065 592.350003zM73.591065 903.797337c-29.520337 0-53.537334-24.015973-53.537334-53.537334 0-29.521361 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.015973 53.537334 53.537334 0 29.521361-24.015973 53.537334-53.537334 53.537334L73.591065 903.797337z"  /></svg>
            </button>
            <nav style={{left:showMenu?"0":"-300px"}}>
                <Link className='link' style={{textDecoration:location.pathname==="/"|"/home"?"underline":"none"}}to="/">Home</Link>
                <Link className='link' style={{textDecoration:location.pathname==="/story"?"underline":"none"}} to="story">Story</Link>
                <Link className='link' style={{textDecoration:location.pathname==="/about"?"underline":"none"}}to="/about">About</Link>
                <button  className='exitMenuButton'  onClick={()=>{setShowMenu(false)}}> 
                    <svg className='arrow Left' data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>1-Arrow Up</title><path d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z"/></svg>
                </button>
                
            </nav>
            <React.Suspense fallback={<Loading/>}>
                    <Outlet/>
            </React.Suspense>
        </div>
    );
}

export default Nav;