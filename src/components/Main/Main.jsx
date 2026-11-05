import { Outlet } from 'react-router-dom';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';

const Main = () => {
  return (
              
      <>
        <NavBar></NavBar>
       
         <Outlet></Outlet>

        
      
      </>
      
  )
}

export default Main
