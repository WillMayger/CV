import React, { Component } from 'react';

export class AnchorPoint extends Component {
  
  smoothScroll(e) {
    e.preventDefault();
    document.querySelector('#' + this.props.region).scrollIntoView({ behavior: 'smooth' });
  }
  render() {
    let last = '';
    if (this.props.last) last = 'last';
    return (
      <div className={"anchor-point " + last}>
        <a href={'#' + this.props.region} onClick={(e) => this.smoothScroll(e)}>
          {this.props.value}
        </a>
      </div>
    );
  }
}
