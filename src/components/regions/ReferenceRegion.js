import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { References } from '../reference/References';
import { StandardText } from '../text/StandardText';

export class ReferenceRegion extends Component {
  render() {
    return (
      <Container noSlant={true} background={'#fff'}>
        <div id={this.props.convert(this.props.region)} className="reference-region module-padding">
          <StandardText region={this.props.region} />
          <References {...this.props} />
        </div>
      </Container>
    );
  }
}
