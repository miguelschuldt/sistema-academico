import React, { useContext } from 'react';

import { Navbar} from 'react-bootstrap';

import { AuthContext } from '../../contexts/AuthContext';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({children}) => {
  const { userName } = useContext(AuthContext);

  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">Sistema academico</Navbar.Brand>
        <Navbar.Text>{userName}</Navbar.Text>
      </Navbar>
      {children}
    </>
  );
}

export default Layout;