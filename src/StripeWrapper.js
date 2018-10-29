import React, { Component } from 'react';
import Stripe1 from './Stripe1.js'
import Stripe2 from './Stripe2.js'

class StripeWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.stripeData.page,
      stripes: props.stripeData.stripes
    }
  }
  render() {
    let counter = 0;
    const stripes = this.state.stripes.map((stripe) => {
      counter++;
      const stripeName = stripe.stripeType;

      if (stripeName === 'stripe1') {
        return <Stripe1 key={counter} stripeData={stripe.fields} />
      } else if (stripeName === 'stripe2') {
        return <Stripe2 key={counter} stripeData={stripe.fields}/>
      } else {
        return (<div>no match</div>);
      }
    });

    return(
      <div>
        <h1>{this.state.title}</h1>
        <h4>Stripes</h4>
        <div>
          {stripes}
        </div>
      </div>
    );
  }
}

export default StripeWrapper;
