import React, { Component } from "react";
import model from "../assets/glassesImage/model.jpg";
import styles from "./ProductList.module.css";
import imagg1 from "../assets/glassesImage/g1.jpg";
import imagg2 from "../assets/glassesImage/g2.jpg";
import imagg3 from "../assets/glassesImage/g3.jpg";
import imagg4 from "../assets/glassesImage/g4.jpg";
import imagg5 from "../assets/glassesImage/g5.jpg";
import imagg6 from "../assets/glassesImage/g6.jpg";
import imagg7 from "../assets/glassesImage/g7.jpg";
import imagg8 from "../assets/glassesImage/g8.jpg";
import imagg9 from "../assets/glassesImage/g9.jpg";
import imagv1 from "../assets/glassesImage/v1.png";
import imagv2 from "../assets/glassesImage/v2.png";
import imagv3 from "../assets/glassesImage/v3.png";
import imagv4 from "../assets/glassesImage/v4.png";
import imagv5 from "../assets/glassesImage/v5.png";
import imagv6 from "../assets/glassesImage/v6.png";
import imagv7 from "../assets/glassesImage/v7.png";
import imagv8 from "../assets/glassesImage/v8.png";
import imagv9 from "../assets/glassesImage/v9.png";



export default class ProductList extends Component {
  state = {
    glass: imagv1,
  };

    handleChangeColor = (img) => {
      this.setState({
        glass: img,
      });
    };

  renderGlass = () => {
    const html = this.glasses.map((item) => {
      return (
        <div key={item.id} style={{margin: "30px"}}>
          
            <h6>{item.name}</h6>
            <p>{item.price}</p>
            <p
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100px",
              }}
            >
              {item.desc}
            </p>
         
        </div>
      );
    });
    return html;
  };

  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: " ../assets/glassesImage/v1.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: " ../src/assets/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "../assets/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  render() {
    return (
      <div>
        <div className={styles.faceModel}>
          <img src={model} alt="" className={styles.imgLeft} />
          <img src={this.state.glass} alt="" className={styles.glassModel}/>
        </div>
        <div className="">
          <img src={model} alt="" className={styles.imgRight} />
        </div>
        <div className={styles.opption}>
          <h2>Chọn kính :</h2>
          <div className={styles.glasses}>
            <button
              onClick={() => {
                this.handleChangeColor(imagv1);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg1} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv2);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg2} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv3);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg3} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv4);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg4} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv5);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg5} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv6);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg6} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv7);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg7} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv8);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg8} alt="" className={styles.sunglasses} />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor(imagv9);
              }}
              style={{ margin: "10px" }}
            >
              <img src={imagg9} alt="" className={styles.sunglasses} />
            </button>
          </div>
          <div className={styles.detail}>

          {this.renderGlass()}
          </div>
        </div>
      </div>
    );
  }
}
