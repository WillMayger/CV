import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../containers/Container';
import Skill from '../skills/Skill';
import StandardText from '../text/StandardText';

class SkillsRegion extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'Node.js',
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(e, selected) {
    this.setState({ selected });
  }

  render() {
    const backgroundColor = '#fff';
    const skills = this.props.skills.map(item => (
      <Skill
        onHover={this.updateSelected}
        key={this.props.convert(this.props.region + item.name)}
        {...item}
      />
    ))
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

SkillsRegion.propTypes = {
  skills: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  convert: PropTypes.func.isRequired,
};

export default SkillsRegion;

