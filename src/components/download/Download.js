import React from 'react';
import PropTypes from 'prop-types';

const Download = props => (
  <div className="download-item">
    <div className="inner">
      <a title={props.name} href={`${props.link}`} download>
        <img alt={props.name} src={`/images/icon/${props.img}`} />
        <span className="text">
          {props.name}
        </span>
        <span className="download-text">Download</span>
      </a>
    </div>
  </div>
);

Download.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Download;
