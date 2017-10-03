import React from 'react';
import PropTypes from 'prop-types';

const Responsive = props => (
  <div className="too-small">
    <span>This page is designed to be like a document and is therefore not responsive.
      Please use a device with a screen size of 1366px or more (most laptops and desktops).
      Thank you for your understanding.<p />
      Your current screen width is: {props.width}px</span>
  </div>
);

Responsive.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Responsive;
