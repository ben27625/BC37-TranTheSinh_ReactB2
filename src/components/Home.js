import React, { Component } from "react";
import ImgBackground from "../assets/glassesImage/background.jpg";
import styles from "./Home.module.css"

import ProductList from "./ProductList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h3 style={{textAlign: "center", backgroundColor: "#0f0f0f7a", height: 50}}>Try Glasses App Online</h3>
        </div>
        <div >
          <img src={ImgBackground} alt="" style={{width: "100%", height:"100%" , opacity: "0.1" , backgroundImage:"../assets/glassesImage/background.jpg"}} className="img-fluid "/>
       
          <div>
          <ProductList/>  
          </div>
          
        </div>
      </div>
    );
  }
}
