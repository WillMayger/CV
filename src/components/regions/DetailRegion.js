import React from 'react';

import ContainerImg from '../containers/ContainerImg';
import SlantText from '../text/SlantText';

const DetailRegion = props => (
  <ContainerImg img={'/images/DetailsImg.jpg'}>
    <SlantText {...props} />
  </ContainerImg>
);

export default DetailRegion;
