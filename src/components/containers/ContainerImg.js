import React from 'react';
import PropTypes from 'prop-types';

const ContainerImg = (props) => {
  const styleBackgroundImg = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
  };

  return (
    <div className="container-wrap">
      <div style={styleBackgroundImg} className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </div>
  );
};

ContainerImg.defaultProps = {
  children: '',
};

ContainerImg.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ContainerImg;
