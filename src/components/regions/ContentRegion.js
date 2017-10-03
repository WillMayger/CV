import React from 'react';
import PropTypes from 'prop-types';

import Container from '../containers/Container';
import ContentText from '../text/ContentText';

const ContentRegion = props => (
  <Container background={props.background}>
    <div id={props.convert(props.region)} className="content-region module-padding">
      <ContentText {...props} />
    </div>
  </Container>
);

ContentRegion.propTypes = {
  background: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  convert: PropTypes.func.isRequired,
};

export default ContentRegion;
