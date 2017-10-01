import React, { Component } from 'react';

export class Download extends Component {
  render() {
    return (
      <div className="download-item">
        <div className="inner">
          <a className={ "" + this.props.link }>
            <img scr={ "" + this.props.img} />
            <span className='text'>
              {this.props.name}
            </span>
          </a>
        </div>
      </div>
    );
  }
}
