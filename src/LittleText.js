import React, { Component } from 'react';

class LittleText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.data.value
    }
  }

  render() {
    return (
      <p>{this.state.value}</p>
    )
  }
}

export default LittleText;
