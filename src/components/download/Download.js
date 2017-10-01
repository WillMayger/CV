import React, { Component } from 'react';

export class Download extends Component {
  render() {
    return (
      <div className="download-item">
        <div className="inner">
          <a  title={this.props.name} href={ "" + this.props.link} download>
            <img alt={this.props.name} src={ "/images/icon/" + this.props.img} />
            <span className='text'>
              {this.props.name}
            </span>
            <span className="download-text">Download</span>
          </a>
        </div>
      </div>
    );
  }
}
