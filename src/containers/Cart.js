import React from 'react';

import Scroll from '../components/ScrollBar'
import Card from '../components/Card'
import dead from '../assets/image/dead.png'

import styled from 'styled-components';

import { connect } from "react-redux";

function App(props) {
  const Main = styled.div`
  .zero{
    width:70%;
    margin:auto;
    text-align:center;
  }
  .zero img{

    width:50%;
  }
  
  `;
  return (
    <Main className="App">
      <Scroll>
      {
      props.cart.length > 0 ?
      props.cart.map((item) => (
            <Card key={item.id} {...item} />
          )):
          <div className='zero'>
            <h2>No products selected</h2>

         
            <img src={dead} alt={dead}/>

          </div>
          }
          

          
           
      </Scroll>
    </Main>
  );
}

const mapStateToPrp = state => {
  console.log(state);
  return {
    cart: state.cart,
   
  
  };
};

export default connect(mapStateToPrp, null)(App);
