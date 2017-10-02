import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import { Skill } from '../skills/Skill';
import { ContentText } from '../text/ContentText';

export class History extends Component {
  render() {
    const skills = this.props.skills.map((item, index) => {
      return (
        <Skill
        onHover={() => {}}
        key={'history skill' + index}
        {...item}
        />
      );
    });
    
    return (
        <div className="history">
          <div className="title">
            <span>{this.props.title}</span><span className="space"></span>
             <span className="time" >{this.props.time.from} - {this.props.time.to}</span>
           </div>
          <div className="contents">
            <div className="skills-used">
              <div className="skills">{skills}</div>
            </div>
            <div className="time">
              <span></span>
            </div>
            <div className="content">
              <ReactMarkdown Softbreak={'br'} source={this.props.text} />
            </div>
          </div>
        </div>
    );
  }
}
