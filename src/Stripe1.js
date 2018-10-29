import React, { Component } from 'react';
import BigText from './BigText.js';
import LittleText from './LittleText.js';

class Stripe1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stripeData: props.stripeData
    }

    // props.stripeData.map((stripe) => {
    //   if (stripe.name === 'bigText') {
    //
    //   }
    // });
  }
  render(props) {
    let counter = 0;
    return (
      <div>
        {this.state.stripeData.map((stripe) => {
          counter++;
            if (stripe.name === 'bigText') {
              return (<BigText key={counter} data={stripe} />);
            } else if (stripe.name === 'littleText') {
              return (<LittleText key={counter} data={stripe} />);
            }
          })
        }
      </div>
    );
  }
}

export default Stripe1;
