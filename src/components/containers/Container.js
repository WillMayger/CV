import React, { Component } from 'react';

export class Container extends Component {
  render() {
    let styles = {};
    if (this.props.background) {
      styles = {
        backgroundColor: this.props.background
      };
    }

    return (
      <div className="container-wrap">
        <div style={styles} className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
