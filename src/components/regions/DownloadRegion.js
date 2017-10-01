import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { Download } from '../download/Download';
import { StandardText } from '../text/StandardText';

export class DownloadRegion extends Component {
  render() {
    const downloads = this.props.downloads.map((item, index) => {
      return (
        <Download key={'download' + index} {...item} />
      );
    });

    return (
      <Container noSlant={true} background={'#fff'}>
        <div id={this.props.convert(this.props.region)} className="download-region module-padding">
          <StandardText region={this.props.region} />
          {downloads}
        </div>
      </Container>
    );
  }
}
