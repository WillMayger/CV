import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export class ContentText extends Component {
  render() {
    return (
      <div className="content-text">
          <div className="text-box">
            <h2>{'<'}{this.props.region}{' />'}</h2>
            <div className="markdown-box">
              <ReactMarkdown Softbreak={'br'} source={this.props.text} />
            </div>
          </div>
      </div>
    );
  }
}
