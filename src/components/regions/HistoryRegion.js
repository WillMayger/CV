import React, { Component } from 'react';

import { Container } from '../containers/Container';
import { History } from '../history/History';
import { StandardText } from '../text/StandardText';

export class HistoryRegion extends Component {
  render() {
    const history = this.props.history.map((item, index) => {
      return (
        <History key={'history' + index} {...item} />
      );
    });

    return (
      <Container  background={'#fff'}>
        <div id={this.props.convert(this.props.region)} className="history-region module-padding">
          <StandardText region={this.props.region} />
          {history}
        </div>
      </Container>
    );
  }
}
