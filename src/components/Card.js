import React, { Component } from "react";
import styles from "./Card.module.css";
import up from "../images/up.png";
import down from "../images/down.png";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };


  render() {
    const { image, name, price } = this.props;
    const counter = this.state.counter;
    return (
      <div className={styles.container}>
        <img src={image} />
        <h3>{name}</h3>
        <p>{price} $</p>
        <div className={styles.counter}>
          <img src={down} alt='arrow' className={this.state.counter ? "": styles.deactived} onClick={this.downHandler} />
          <span>{counter}</span>
          <img src={up} alt='arrow' onClick={this.upHandler} />
        </div>
        <button>Add To Cart</button>
      </div>
    );
  }
}

export default Card;
