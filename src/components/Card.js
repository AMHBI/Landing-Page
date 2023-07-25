import React from 'react';
import styles from "./Card.module.css";

const Card = (props) => {
    const {image ,name , price} = props;
    
    return (
        <div className={styles.container}>
            <img src={image}/>
            <h3>{name}</h3>
            <p>{price} $</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Card;