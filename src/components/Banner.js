import React , {Component} from 'react';
import styles from "./Banner.module.css";
import banner from "../images/Banner.jpg";

class Banner extends Component {
    render() {
        return (
            <div className={styles.container}>
            <img src={banner} alt= "" />
            <div className={styles.textContainer}>
                <h1>Online Shop</h1>
                <p>Buy <span> Online </span> your needs </p>
            </div>
        </div>
        );
    }
}

export default Banner;