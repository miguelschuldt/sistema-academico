import React from 'react';

import { Navbar} from 'react-bootstrap';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sistema academico</Navbar.Brand>
      </Navbar>
      {children}
    </>
  );
}

export default Layout;