import React, { Component } from 'react';

import { ContainerImg } from '../containers/ContainerImg';
import { SlantText } from '../text/SlantText';

export class DetailRegion extends Component {
  render() {
    return (
      <ContainerImg img={ '/images/DetailsImg.jpg' }>
        <SlantText {...this.props} />
      </ContainerImg>
    );
  }
}
