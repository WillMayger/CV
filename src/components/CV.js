import React, { Component } from 'react';
import { personal } from '../personal.js'; //personal info like phone number.

import { DetailRegion } from './DetailRegion';

export class CV extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Will Mayger',
      phone: personal.phone,
      dateOfBirth: personal.dateOfBirth,
      address: personal.address,
      email: personal.email
    }
  }

  render() {
    const props = JSON.parse(JSON.stringify(this.state)); //deep copy to avoid mutation.
    props.align = 'left';

    return (
      <div className="wrap">
        <DetailRegion {...props} />
      </div>
    );
  }
}
