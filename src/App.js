import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Landing from './components/Landing';
import Products from './components/Products';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Landing} />
        </Switch>
        <Footer />
    </div>
    );
  }
}

export default App;
