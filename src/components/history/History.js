import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Skill from '../skills/Skill';

const History = (props) => {
  const skills = props.skills.map(item => (
    <Skill
      onHover={() => {}}
      key={`history skill ${item.name}`}
      {...item}
    />
  ));

  return (
    <div className="history">
      <div className="title">
        <span>{props.title}</span><span className="space" />
        <span className="time" >{props.time.from} - {props.time.to}</span>
      </div>
      <div className="contents">
        <div className="skills-used">
          <div className="skills">{skills}</div>
        </div>
        <div className="time">
          <span />
        </div>
        <div className="content">
          <ReactMarkdown Softbreak={'br'} source={props.text} />
        </div>
      </div>
    </div>
  );
};

History.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
};

export default History;
