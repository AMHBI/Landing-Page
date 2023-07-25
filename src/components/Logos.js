import React from 'react';
import styles from "./Logos.module.css"
import acer from "../images/logo-Acer.png";
import apple from "../images/logo-Apple.png";
import intel from "../images/logo-Intel.png";
import nvidida from "../images/logo-Nvidia.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who support us ?</h3>
            
            <div>
            <img src={apple} alt='Logosss'/>
            <img src={acer} alt='Logosss'/>
            <img src={intel} alt='Logosss'/>
            <img src={nvidida} alt='Logosss'/>
            </div>
        </div>
    );
};

export default Logos;