import React, { Component } from 'react';


export class Reference extends Component {
  render() {
    return (
      <div className="reference">
        <div className="inner">
        {this.props.name}
        {this.props.email}
        {this.props.phone}
        {this.props.position}
        </div>
      </div>
    );
  }
}
