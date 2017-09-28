import React, { Component } from 'react';

export class ContainerImg extends Component {
  render() {
    const styleBackgroundImg = {
      backgroundImage: `url(${this.props.img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '0% 0%'
    };

    return (
      <div className="container-wrap">
        <div style={styleBackgroundImg} className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
