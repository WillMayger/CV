import React from 'react';
import PropTypes from 'prop-types';

const Reference = props => (
  <div className="reference">
    <div className="inner">
      <span className="name">
        {props.name}
      </span>
      <span>
        {props.position}
      </span>
      <span>
        {props.email}
      </span>
      <span>
        {props.phone}
      </span>
    </div>
  </div>
);

Reference.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Reference;
