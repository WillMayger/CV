import React, { Component } from 'react';

export class Responsive extends Component {
  render() {
    return(
      <div className="too-small">
        <span>This page is designed to be like a document and is therefore not responsive.
         Please use a device with a screen size of 1366px or more (most laptops and desktops).
         Thank you for your understanding.<p></p>
         Your current screen width is: {this.props.width}px</span>
      </div>
    );
  }
}
