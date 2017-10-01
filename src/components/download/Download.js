import React, { Component } from 'react';

export class Download extends Component {
  render() {
    return (
      <div className="download-item">
        <div className="inner">
          <a className={ "" + this.props.link} download="download">
            <img src={ "/images/icon/" + this.props.img} />
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
