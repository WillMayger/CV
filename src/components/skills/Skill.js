import React, { Component } from 'react';

export class Skill extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <img src={"/images/icon/" + this.props.icon} />
      </div>
    );
  }
}
