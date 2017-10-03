import React from 'react';
import PropTypes from 'prop-types';

import Container from '../containers/Container';
import History from '../history/History';
import StandardText from '../text/StandardText';

const HistoryRegion = (props) => {
  const history = props.history.map(item => (
    <History key={`history ${item.title}`} {...item} />
  ));

  return (
    <Container background={'#fff'}>
      <div id={props.convert(props.region)} className="history-region module-padding">
        <StandardText region={props.region} />
        {history}
      </div>
    </Container>
  );
};

HistoryRegion.propTypes = {
  history: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  convert: PropTypes.func.isRequired,
};

export default HistoryRegion;
