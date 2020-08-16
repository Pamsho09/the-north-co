import React from 'react'
import logo from '../assets/image/logo.png'
import styled from 'styled-components';
function Header() {


    const Logo = styled.header`
    width:100%;
 
    display:flex;
    background:#fff;
justify-content:center;
align-items:center;
box-shadow: 1px 5px 5px #D5D8DC;
border-radius:10px;
    img{
        width:20%;
max-width:100px;
    }
    h2{
        font-family: 'Pacifico', cursive;
    }
    `
    return (
        <>
           
 <Logo>
               

                    <h2>Welcome the north cow</h2>
                    <img src={logo} alt="" />


                </Logo>



            
        </>
    )
}

export default Header
