import React, { Component } from 'react';

import Container from '../containers/Container';
import { Nav } from '../nav/Nav';

export class NavRegion extends Component {
  render() {
    const backgroundColor = '#fff';
    return (
      <Container noSlant={true} background={backgroundColor}>
        <div className="nav-region">
          <Nav {...this.props}/>
        </div>
      </Container>
    );
  }
}
