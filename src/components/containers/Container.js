import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
  const backgroundColor = props.background;
  let styles = {};
  let slantClass = 'slant';

  if (backgroundColor) {
    styles = {
      backgroundColor,
    };
    slantClass += ` slant-${backgroundColor.split('#').join('')}`;
  }
  if (props.noSlant) slantClass = '';

  return (
    <div className="container-wrap">
      <div style={styles} className={`container ${slantClass}`}>
        <div className="row">
          {props.children}
        </div>
        <div className={slantClass} />
      </div>
    </div>
  );
};

Container.defaultProps = {
  noSlant: undefined,
  background: undefined,
  children: '',
};

Container.propTypes = {
  noSlant: PropTypes.bool,
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
