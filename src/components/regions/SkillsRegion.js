import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { Skill } from '../skills/Skill';
import { StandardText } from '../text/StandardText';

export class SkillsRegion extends Component {
  render() {
    const backgroundColor = '#fff',
          skills = this.props.skills.map((item, index) => {
            return (
              <Skill
              key={this.props.convert(this.props.region + item.name)}
              {...item}
              />
            );
          })
    ;

    return (
      <Container background={backgroundColor}>
        <div id={this.props.convert(this.props.region)} className="skills-region">
          <StandardText region={this.props.region} />
          {skills}
        </div>
      </Container>
    );
  }
}
