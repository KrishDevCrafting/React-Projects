import React, { useState } from "react";
import "./Component.css";
import Iphone15pro from "./img/Iphone15.jpg";
const Cum = () => {
  // const Coma = 140990.0.toLocaleString()
  const [count, setcount] = useState(140990.0);
  const [countQty] = useState("");
  const click = () => {
    setcount(count + 140990.0);
    
  };

 
  const Delete = () => {
    setcount(count - 140990.0);
    
  };
  const Quantity = () => {
    var value = countQty === 1 ? 1 : 5;
    return value;
  };

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
          </ul> start
        </div>
        <span className="num">₹ 1,40,990.00</span>
        <p className="Value">Qty:{count.toLocaleString()}</p>
        <button className="btnp">Qty :</button>
        <p>{countQty}</p>

        <button type="button" className="btn bg-warning" onClick={Delete}>
          Delete
        </button>
        <form action="">
          <label htmlFor=""> Qty :</label>
          <select name="Qty" id="" onChange={click} onClick={Quantity}  >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="7">8</option>
            <option value="7">9</option>
          </select>
        </form>

        <option />
        <hr />
      </div>
    </>
  );
};

export default Cum;
