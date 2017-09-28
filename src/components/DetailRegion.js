import React, { Component } from 'react';

import { ContainerImg } from './containers/ContainerImg';
import { SlantText } from './text/SlantText';
import DetailImg from './static/Detail/DetailImg.jpg';

export class DetailRegion extends Component {
  render() {
    const props = this.props;

    return (
      <ContainerImg img={ DetailImg }>
        <SlantText {...props} />
      </ContainerImg>
    );
  }
}
