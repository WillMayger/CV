import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { ContentText } from '../text/ContentText';

export class ContentRegion extends Component {
  render() {
    return (
      <Container background={this.props.background}>
        <div id={this.props.convert(this.props.region)} className="content-region module-padding">
          <ContentText {...this.props} />
        </div>
      </Container>
    );
  }
}
