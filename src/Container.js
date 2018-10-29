import React, { Component } from 'react';
import StripeWrapper from './StripeWrapper.js';
import './App.css';
const data = require('./data.json');

class Container extends Component {
  render() {
    return (
      <div className="App">
        <StripeWrapper stripeData={data} />
      </div>
    );
  }
}

export default Container;
