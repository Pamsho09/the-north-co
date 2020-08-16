import React from 'react'
import styled from 'styled-components';

function ScrollBar({children}) {

    const Scroll =styled.div`
    width:85%;
    margin:auto;
   margin-top:1em;
    border:2px solid  #D5D8DC;
     height:70vh;
     box-shadow: 1px 5px 5px #D5D8DC;
border-radius:10px;
overflow:scroll;
    `
    return (
        <>
<Scroll>


            {children}
</Scroll>
    
        </>
    )
}

export default ScrollBar
