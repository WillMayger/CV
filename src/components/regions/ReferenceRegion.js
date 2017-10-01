import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { Reference } from '../reference/Reference';
import { StandardText } from '../text/StandardText';

export class ReferenceRegion extends Component {
  render() {
    const references = this.props.references.map((item, index) => {
      return (
        <Reference key={'ref' + index} {...item} />
      )
    });

    return (
      <Container noSlant={true} background={'#fff'}>
        <div id={this.props.convert(this.props.region)} className="reference-region module-padding">
          <StandardText region={this.props.region} />
          {references}
        </div>
      </Container>
    );
  }
}
