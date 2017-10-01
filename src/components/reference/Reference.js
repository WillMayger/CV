import React, { Component } from 'react';


export class Reference extends Component {
  render() {
    return (
      <div className="reference">
        <div className="inner">
          <span className="name">
          {this.props.name}
          </span>
          <span>
          {this.props.position}
          </span>
          <span>
          {this.props.email}
          </span>
          <span>
          {this.props.phone}
          </span>
        </div>
      </div>
    );
  }
}
