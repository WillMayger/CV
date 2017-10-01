import React, { Component } from 'react';

export class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <img alt={this.props.name} onMouseOver={(e) => this.props.onHover(e, this.props.name)} title={this.props.name} src={"/images/icon/" + this.props.icon} />
      </div>
    );
  }
}
