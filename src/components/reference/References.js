import React, { Component } from 'react';

import { Reference } from './Reference';

export class References extends Component {
  render() {
    const references = this.props.references.map((item, index) => {
      return (
        <Reference key={'ref' + index} {...item} />
      )
    });

    return (
      <div className="references">
        {references}
      </div>
    );
  }
}
