import React from 'react';
import PropTypes from 'prop-types';

import Container from '../containers/Container';
import Reference from '../reference/Reference';
import StandardText from '../text/StandardText';

const ReferenceRegion = (props) => {
  const references = props.references.map(item => (
    <Reference key={`ref ${item.name}`} {...item} />
  ));

  return (
    <Container background={'#323333'}>
      <div id={props.convert(props.region)} className="reference-region module-padding">
        <StandardText region={props.region} />
        {references}
      </div>
    </Container>
  );
};

ReferenceRegion.propTypes = {
  references: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  convert: PropTypes.func.isRequired,
};

export default ReferenceRegion;
