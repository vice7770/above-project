import React from 'react';
import Header from './components/Header';
import { Toaster } from 'sonner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='' style={{ overflowX: 'hidden' }}>
      <Header />
      <main>{children}</main>
      <Toaster />
    </div>
  );
};

export default Layout;