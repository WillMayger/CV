import React, { Component } from 'react';

export class StandardText extends Component {
  render() {
    return (
      <div className="standard-text">
          <div className="text-box">
            <h2>{'<'}{this.props.region}{' />'}</h2>
          </div>
      </div>
    );
  }
}
