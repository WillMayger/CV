import React, { Component } from 'react';

export class AnchorPoint extends Component {
  render() {
    return (
      <div className="anchor-point">
        <a href={'#' + this.props.region}>
          {this.props.value}
        </a>
      </div>
    );
  }
}
