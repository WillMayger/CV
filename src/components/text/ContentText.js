import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const ContentText = props => (
  <div className="content-text">
    <div className="text-box">
      <h2>{'<'}{props.region}{' />'}</h2>
      <div className="markdown-box">
        <ReactMarkdown Softbreak={'br'} source={props.text} />
      </div>
    </div>
  </div>
);

ContentText.propTypes = {
  region: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContentText;
