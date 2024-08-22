import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./Component/LoginAx";
import DashComponent from "./Component/DashBoard";
import SingUpForm from "./Component/SingupAx"
// Or @react-navigation/core for web

// Your app components

import { BrowserRouter, Routes ,Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginForm/>}/>

      <Route path="/sign" element={<SingUpForm/>}/>
      <Route path="/Dash" element={<DashComponent/>}/>

      
    </Routes>
   
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
