import React from 'react';
import PropTypes from 'prop-types';

import AnchorPoint from './AnchorPoint';

const Nav = (props) => {
  const anchors = props.regions.map((item, index) => {
    const anchorPoint = props.convert(item);
    const last = (index + 1) === props.regions.length;
    return (
      <AnchorPoint
        key={anchorPoint}
        region={anchorPoint}
        value={item}
        last={last}
      />
    );
  });

  return (
    <div className="nav">
      <div className="inner">
        <span className="info">( ...jumpTo )<span className="marrs-green arrow-func">{' => '}</span>{'{'}</span>
        {anchors}
        <span className="info">{' }'}</span>
      </div>
    </div>
  );
};

Nav.propTypes = {
  regions: PropTypes.array.isRequired,
  convert: PropTypes.func.isRequired,
};

export default Nav;
