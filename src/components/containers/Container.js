import React, { Component } from 'react';

export class Container extends Component {
  render() {
    const backgroundColor = this.props.background;
    let styles = {},
        slantClass = 'slant';
    if (backgroundColor) {
      styles = {
        backgroundColor
      };
      slantClass += ' slant-' + backgroundColor.split('#').join('');
    }
    if (this.props.noSlant) slantClass = '';

    return (
      <div className="container-wrap">
        <div style={styles} className={"container " + slantClass}>
          <div className="row">
            {this.props.children}
          </div>
          <div className={slantClass}></div>
        </div>
      </div>
    );
  }
}
