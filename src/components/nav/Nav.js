import React, { Component } from 'react';

import { AnchorPoint } from './AnchorPoint';

export class Nav extends Component {
  render() {
    const anchors = this.props.regions.map((item, index) => {
      const anchorPoint = this.props.convert(item),
            last = (index + 1) === this.props.regions.length ? true : false;
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
          <span className="info">( ...Jump to )<span className="marrs-green arrow-func">{' => '}</span>{'{'}</span>
          {anchors}
          <span className="info">{' }'}</span>
        </div>
      </div>
    );
  }
}
