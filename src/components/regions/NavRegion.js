import React from 'react';

import Container from '../containers/Container';
import Nav from '../nav/Nav';

const NavRegion = props => (
  <Container noSlant background={'#fff'}>
    <div className="nav-region">
      <Nav {...props} />
    </div>
  </Container>
);

export default NavRegion;
