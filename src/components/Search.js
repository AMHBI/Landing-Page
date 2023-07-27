import React, { Component } from 'react';
import styles from "./Search.module.css";

class Search extends Component {
    constructor(){
        super()
        this.state = {
            text : "",
        };
    }
    changeHandler = event => {
        this.setState({
            text : event.target.value,
        })
    }
        render() {
        const {text} = this.state;
        return (
            
            <div className={styles.container}>
                <p>Search what you want</p>
                <input placeholder='Search...' value={this.state.text} onChange={this.changeHandler}/>
                <span>{text}</span>
            </div>
                
        );
    }
}

export default Search;