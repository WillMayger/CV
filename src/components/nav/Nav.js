import React, { Component } from 'react';

import { AnchorPoint } from './AnchorPoint';

export class Nav extends Component {
  render() {
    const anchors = this.props.regions.map((item, index) => {
      const anchorPoint = this.props.convert(item);
      return (
        <AnchorPoint
        key={anchorPoint}
        region={anchorPoint}
        value={item}
        />
      );
    });

    return (
      <div className="nav">
        <div className="inner">
          <span className="info">( Jump to... )<span className="arrow-purple arrow-func">{' => '}</span>{'{'}</span>
          {anchors}
          <span className="info">{' }'}</span>
        </div>
      </div>
    );
  }
}
