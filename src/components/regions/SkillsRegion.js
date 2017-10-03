import React, { Component } from 'react';

import Container from '../containers/Container';
import { Skill } from '../skills/Skill';
import { StandardText } from '../text/StandardText';

export class SkillsRegion extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'Node.js'
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(e, selected) {
    this.setState({selected});
  }

  render() {
    const backgroundColor = '#fff',
          skills = this.props.skills.map((item, index) => {
            return (
              <Skill
              onHover={this.updateSelected}
              key={this.props.convert(this.props.region + item.name)}
              {...item}
              />
            );
          })
    ;

    return (
      <Container background={backgroundColor}>
        <div id={this.props.convert(this.props.region)} className="skills-region module-padding">
          <StandardText region={this.props.region} />
          <div className="selected-skill">{this.state.selected}</div>
          {skills}
        </div>
      </Container>
    );
  }
}
