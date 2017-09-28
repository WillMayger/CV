import React, { Component } from 'react';

export class SlantText extends Component {
  render() {
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

          <div className="line">
            <span className="line-number">2</span><span className="name">name: {'"'}<span className="bold">{this.props.name}</span>{'"'},</span>
          </div>
          <div className="line">
            <span className="line-number">3</span>
            <span className="email">email: {'"'}
              <span className="bold">{this.props.email}</span>
            {'"'},</span>
          </div>
          <div className="line">
            <span className="line-number">4</span>
            <span className="phone">phone: {'"'}
              <span className="bold">{this.props.phone}</span>
            {'"'}</span>
          </div>
          <div className="line">
            <span className="line-number">5</span>
            <span className="bracket">{"};"}</span>
          </div>
          </div>
      </div>
    );
  }
}
