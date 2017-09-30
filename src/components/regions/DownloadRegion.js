import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { Skill } from '../skills/Skill';
import { StandardText } from '../text/StandardText';

export class DownloadRegion extends Component {
  render() {
    return (
      <Container noSlant={true} background={''}>
        <div id={this.props.convert(this.props.region)} className="skills-region module-padding">
        </div>
      </Container>
    );
  }
}
