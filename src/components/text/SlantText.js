import React, { Component } from 'react';

export class SlantText extends Component {
  render() {
    const lines = this.props.personal.map((item, index) => {
      return (
        <div key={item.type} className="line">
          <span className="line-number">{(index + 2) + ""}</span>
          <span className="item.type">{item.type}: {'"'}
            <span className="bold">{item.value}</span>
          {'"'},</span>
        </div>
      );
    });
    const lineLength = this.props.personal.length;

    return (
      <div className={"slant-text half " + this.props.align}>
        <div className="border"></div>
          <div className="text-box bracket-system heading">
          <div className="line">
            <span className="line-number">1</span>
            <span className="bracket">
              <span className="bold const const-orange">
                {"const"}
              </span>
               webDeveloper {' = {'}
            </span>
          </div>
          {lines}
          <div className="line">
            <span className="line-number">{(lineLength + 2) + ''}</span>
            <span className="bracket">{"};"}</span>
          </div>
          </div>
      </div>
    );
  }
}
