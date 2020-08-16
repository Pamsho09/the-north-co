import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import carne from "../assets/image/005-carne.png";
import cafe from "../assets/image/006-taza-para-cafe.png";
import cerveza from "../assets/image/007-cerveza.png";
import car from "../assets/image/carrito-de-compras.png";
function Menu() {
  const Bar = styled.div`
    height: 4em;
    display: grid;
    gap: 0.5em;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    color: #fff;

    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 4em;
    z-index: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    div {
      width: 45px;
      height: 45px;
      background: #fff;
      border-radius: 100%;
      padding: 5px;
      margin: auto;
      display: flex;
    }
    img {
      width: 37px;
      height: 37px;
      margin: auto;
    }
  `;

  return (
    <>
      <Bar>
        <Link to="/">
          <div>
            <img src={carne} alt="" />
          </div>
        </Link>
        <Link to="/coffe">
          <div>
            <img src={cafe} alt="" />
          </div>
        </Link>
        <Link to="/soda">
          <div>
            <img src={cerveza} alt="" />
          </div>
        </Link>
        <Link to="/cart">
          <div>
            <img src={car} alt="" />{" "}
          </div>
        </Link>
      </Bar>
    </>
  );
}

export default Menu;
