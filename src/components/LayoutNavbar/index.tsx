import React from 'react';

import { Navbar } from 'react-bootstrap';

function LayoutNavbar() {
  return (
    <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Sistema academico</Navbar.Brand>
        </Navbar>
    </>
  );
}

export default LayoutNavbar;