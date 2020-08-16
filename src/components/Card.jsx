<<<<<<< HEAD
import React, {useRef  } from 'react'

import questionOf from '../assets/image/002-pregunta-1.png'
import questionOn from '../assets/image/001-pregunta.png'
import { connect } from 'react-redux'

import {setCart} from '../actions'
import styled from 'styled-components';
function Card(props) {
const {id,title,description,price,image }=props

console.log(props)
    const Item = styled.div`
   
      
   border: 2px solid #d5d8dc;
width: 90%;
text-align:center;
margin:1em 5% 1em 5%;
display: grid;
grid-template-columns: 40% 35% 25%;

text-align: center;

align-items: center;
position: relative;
border-radius: 20px;
height: auto;


.image__producto-off {
  width:100% ;
  max-width:7.5em;
  height: 5.5em;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.description-off {
  display: none;
 
}

.description-on {
  padding:10px;
  grid-column: 1/4;
  width: 90%;
  text-align:justify;

  justify-content: center;
 
}

.title-off h4{
 margin:auto
}
.button-off {
  width: 4.5em;
  height: 2em;

  background-color: #a3e4d7;
  border: none;

  text-transform: uppercase;
  border-radius: 10px;
}
.buttons {
  display: grid;
  height: 5.5em;
  justify-content: center;
}
.checkbox {
  width: 40%;
}
.containerCheck{
  padding:10px
}
 .containerCheck input{
display:none

 }
 .containerCheck input:checked ~ #checkbox{
   display:block;
background-image:url(${questionOn});
background-size:cover;
width:30px;
height:30px;

   
}
 .containerCheck label{
   display:block;
background-image:url(${questionOf});
background-size:cover;
width:30px;
height:30px;
   
}
   
    `
      const ref = useRef(false)
 
function handleChange(){console.log(ref.current.checked)
  let ids=`description`+id

if(ref.current.checked){
  document.getElementById(ids).classList .remove('description-off')
  document.getElementById(ids).classList .add('description-on')
 
  
}else{

  document.getElementById(ids).classList .remove('description-on')
  document.getElementById(ids).classList .add('description-off')
  

}


}
const handleSetCart = ()=>{

  props.setCart({id,title,description,price,image})
  console.log({id,title,description,price,image})
 }
    return (<>
        <Item className='animate__animated animate__zoomInDown s'>
          
            <img className='image__producto-off' src={image} alt="" />
    <div className='title-off'><h4 >{title}</h4>
    <span>Price : <span className="price" >${price}</span></span>
            </div>
            
            <div className='buttons'>
              <div className='containerCheck'>
                
                
                <input type="checkbox" name="checkbox" id={`checkbox`+id } ref={ref} 
                className='' onChange={handleChange}/>
                <label id ='checkbox'  htmlFor={`checkbox`+id }></label>
                </div>  
                
                <button className='button-off' onClick={handleSetCart} >Add</button></div>



            <p id={`description`+id }className='description-off animate__animated animate__fadeInDown animate__delay-.5s' >
              {description}
            </p>


        </Item></>
    )
}
const mapDispatchToProps ={
  setCart,
  }
  export default connect(null,mapDispatchToProps)(Card);
  
=======
import React, { useRef } from "react";

import questionOf from "../assets/image/002-pregunta-1.png";
import questionOn from "../assets/image/001-pregunta.png";
import { connect } from "react-redux";

import { setCart } from "../actions";
import styled from "styled-components";
function Card(props) {
  const { id, title, description, price, image } = props;

  console.log(props);
  const Item = styled.div`
    border: 2px solid #d5d8dc;
    width: 90%;
    text-align: center;
    margin: 1em 5% 1em 5%;
    display: grid;
    grid-template-columns: 40% 35% 25%;

    text-align: center;

    align-items: center;
    position: relative;
    border-radius: 20px;
    height: auto;

    .image__producto-off {
      width: 100%;
      max-width: 7.5em;
      height: 5.5em;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    .description-off {
      display: none;
    }

    .description-on {
      padding: 10px;
      grid-column: 1/4;
      width: 90%;
      text-align: justify;

      justify-content: center;
    }

    .title-off h4 {
      margin: auto;
    }
    .button-off {
      width: 4.5em;
      height: 2em;

      background-color: #a3e4d7;
      border: none;

      text-transform: uppercase;
      border-radius: 10px;
    }
    .buttons {
      display: grid;
      height: 5.5em;
      justify-content: center;
    }
    .checkbox {
      width: 40%;
    }
    .containerCheck {
      padding: 10px;
    }
    .containerCheck input {
      display: none;
    }
    .containerCheck input:checked ~ #checkbox {
      display: block;
      background-image: url(${questionOn});
      background-size: cover;
      width: 30px;
      height: 30px;
    }
    .containerCheck label {
      display: block;
      background-image: url(${questionOf});
      background-size: cover;
      width: 30px;
      height: 30px;
    }
  `;
  const ref = useRef(false);

  function handleChange() {
    console.log(ref.current.checked);
    let ids = `description` + id;

    if (ref.current.checked) {
      document.getElementById(ids).classList.remove("description-off");
      document.getElementById(ids).classList.add("description-on");
    } else {
      document.getElementById(ids).classList.remove("description-on");
      document.getElementById(ids).classList.add("description-off");
    }
  }
  const handleSetCart = () => {
    props.setCart({ id, title, description, price, image });
    console.log({ id, title, description, price, image });
  };
  return (
    <>
      <Item className="animate__animated animate__zoomInDown s">
        <img className="image__producto-off" src={image} alt="" />
        <div className="title-off">
          <h4>{title}</h4>
          <span>
            Price : <span className="price">${price}</span>
          </span>
        </div>

        <div className="buttons">
          <div className="containerCheck">
            <input
              type="checkbox"
              name="checkbox"
              id={`checkbox` + id}
              ref={ref}
              className=""
              onChange={handleChange}
            />
            <label id="checkbox" htmlFor={`checkbox` + id}></label>
          </div>

          <button className="button-off" onClick={handleSetCart}>
            Add
          </button>
        </div>

        <p
          id={`description` + id}
          className="description-off animate__animated animate__fadeInDown animate__delay-.5s">
          {description}
        </p>
      </Item>
    </>
  );
}
const mapDispatchToProps = {
  setCart,
};
export default connect(null, mapDispatchToProps)(Card);
>>>>>>> interactive
