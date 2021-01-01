import React, { ReactNode } from 'react';

import LayoutNavbar from '../LayoutNavbar'

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='layout'>
      <LayoutNavbar/>
      <main className='content'>
        { children }
      </main>
    </div>
  );
}

export default Layout;