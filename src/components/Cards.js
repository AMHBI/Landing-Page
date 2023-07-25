import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css";
import firstPhone from "../images/pr-001.jpg";
import secondPhone from "../images/pr-002.jpg";
import thirdPhone from "../images/pr-003.jpg";
import fourthPhone from "../images/pr-004.jpg";

const Cards = () => {
    return (
        <div className={styles.card_container}>
            <Card  image={firstPhone}  name="Galaxy A04s"        price="29.99" />
            <Card  image={secondPhone} name="Galaxy A52"         price="35.99" />
            <Card  image={thirdPhone}  name="Galaxy S23 Ultra"   price="159.99" />
            <Card  image={fourthPhone} name="Galaxy A21"         price="31.99" />
        </div>
    );
};

export default Cards;