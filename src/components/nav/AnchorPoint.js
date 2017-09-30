import React, { Component } from 'react';

export class AnchorPoint extends Component {
  render() {
    let last = '';
    if (this.props.last) last = 'last';
    return (
      <div className={"anchor-point " + last}>
        <a href={'#' + this.props.region}>
          {this.props.value}
        </a>
      </div>
    );
  }
}
