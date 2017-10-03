import React from 'react';
import PropTypes from 'prop-types';

const StandardText = props => (
  <div className="standard-text">
    <div className="text-box">
      <h2>{'<'}{props.region}{' />'}</h2>
    </div>
  </div>
);

StandardText.propTypes = {
  region: PropTypes.string.isRequired,
};

export default StandardText;
