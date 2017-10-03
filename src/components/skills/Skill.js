import React from 'react';
import PropTypes from 'prop-types';

const Skill = props => (
  <div className="skill">
    <img
      alt={props.name}
      onMouseOver={e => props.onHover(e, props.name)}
      title={props.name}
      src={`/images/icon/${props.icon}`}
    />
  </div>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default Skill;
