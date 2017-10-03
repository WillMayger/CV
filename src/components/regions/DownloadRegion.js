import React from 'react';
import PropTypes from 'prop-types';

import Container from '../containers/Container';
import Download from '../download/Download';
import StandardText from '../text/StandardText';

const DownloadRegion = (props) => {
  const downloads = props.downloads.map(item => (
    <Download key={`download ${item.name}`} {...item} />
  ));

  return (
    <Container noSlant background={'#fff'}>
      <div id={props.convert(props.region)} className="download-region module-padding">
        <StandardText region={props.region} />
        {downloads}
      </div>
    </Container>
  );
};

DownloadRegion.propTypes = {
  downloads: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  convert: PropTypes.func.isRequired,
};

export default DownloadRegion;
