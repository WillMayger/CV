import React from 'react';
import PropTypes from 'prop-types';

const SlantText = (props) => {
  const lines = props.personal.map((item, index) => {
    const value = () => {
      if (item.value.indexOf('http') > -1) {
        return (
          <a href={`${item.value}`} target="_blank" title={`${item.value}`}>
            {item.value}
          </a>
        );
      }

      return item.value;
    };

    return (
      <div key={item.type} className="line">
        <span className="line-number">{`${index + 2}`}</span>
        <span className="item.type">{item.type}: {'"'}
          <span className="bold">{value()}</span>
          {'"'},</span>
      </div>
    );
  });
  const lineLength = props.personal.length;

  return (
    <div className={'slant-text left half'}>
      <div className="border" />
      <div className="text-box bracket-system heading">
        <div className="line">
          <span className="line-number">1</span>
          <span className="bracket">
            <span className="bold const const-orange">
              {'const'}
            </span>
               webDeveloper {' = {'}
          </span>
        </div>
        {lines}
        <div className="line">
          <span className="line-number">{`${lineLength + 2}`}</span>
          <span className="bracket">{'};'}</span>
        </div>
      </div>
    </div>
  );
};

SlantText.propTypes = {
  personal: PropTypes.array.isRequired,
};

export default SlantText;
