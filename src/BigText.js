import React, { Component } from 'react';

class BigText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.data.value
    }
  }

  render() {
    return (
      <h1>{this.state.value}</h1>
    )
  }
}

export default BigText;
