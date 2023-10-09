import React from 'react';
import Navbar from '../Navbar';

interface WrapperPageProps {
    children: React.ReactNode;
}

const WrapperPage = ({ children }: WrapperPageProps) => {
  return (
    <>
        <Navbar />
        <div className="container">
            {children}
        </div>
    </>
  );
}

export default WrapperPage;