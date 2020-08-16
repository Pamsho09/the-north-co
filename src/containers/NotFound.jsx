import React from "react";
import dead from '../assets/image/dead.png'
import styled from 'styled-components';
const Found=styled.div`
display:grid;
justify-items:center;
justify-content:center;
margin:auto;
img{

  width:50%;
}

`
const NotFound = () => {
  return (
    <>
      <Found>
        
          <img src={dead} alt=""/>
         
          <h1>Not Found :,)</h1>
       
      </Found>
      
    </>
  );
};
export  default NotFound