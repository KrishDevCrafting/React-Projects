import React, { useState } from "react";
import "./Component.css";
import Iphone15pro from "./img/Iphone15.jpg";
const Cum = () => {
  const [count, setcount] = useState(140990.0);
  const [qty, setqty] = useState();
  const click = () => {
    setcount(count + 140990.0);
  };
  const Delete = () => {
    setcount(count - 140990.0);
  };
  const Quantity=()=>{
    setqty(qty)
  }

  return (
    <>
      <div className="container">
        <h1>Shopping Card</h1>
        <hr />
        <h3>Apple iPhone 15 Pro (256)-Black Titanium</h3>
        <img src={Iphone15pro} alt="img" />
        <div className="text2">
          <ul>
            <li className="stock">In stock</li>
            <li className="free">Eligible for FREE Shipping</li>
            <li>Colour: Natural Titanium</li>
            <li>Size: 256 GB</li>
          </ul>
        </div>
        <span className="num">₹ 1,40,990.00</span>
        <p className="Value">Qty:{count}</p>
        <button className="btnp" onClick={click}>
          Qty :
        </button>
        <button type="button" className="btn bg-warning" onClick={Delete}>
          Delete
        </button>
        <form action="">
          <label htmlFor=""> Qty :</label>
          <select name="Qty" id="" onChange={click}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>

        <option />
        <hr />
      </div>
    </>
  );
};

export default Cum;
