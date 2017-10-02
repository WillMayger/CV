import React, { Component } from 'react';

import { Skill } from '../skills/Skill';
import { ContentText } from '../text/ContentText';

export class History extends Component {
  render() {
    return (
        <div className="history">
          <div className="title">{this.props.title}</div>
          <div className="contents">
            <div className="skills-used">
              <span> Skills Used </span>
              <div className="skills">skills</div>
            </div>
            <div className="time">
              <span>From: {this.props.time.from} To: {this.props.time.to}</span>
            </div>
            <div className="content">
              <ContentText {...this.props} />
            </div>
          </div>
        </div>
    );
  }
}
