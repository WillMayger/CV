import React from 'react';
import PropTypes from 'prop-types';

const AnchorPoint = (props) => {
  const smoothScroll = (e) => {
    e.preventDefault();
    document.querySelector(`#${props.region}`).scrollIntoView({ behavior: 'smooth' });
  };
  let last = '';
  if (props.last) last = 'last';
  return (
    <div className={`anchor-point ${last}`}>
      <a href={`#${props.region}`} onClick={e => smoothScroll(e)}>
        {props.value}
      </a>
    </div>
  );
};

AnchorPoint.propTypes = {
  region: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};

export default AnchorPoint;
