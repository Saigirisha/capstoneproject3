import React from 'react';

import { Header, About, Gallery, Menu, FindUs, Footer } from '../index';
import Wrapper from '../../wrapper/Wrapper';



const Home = () => {
  return (
    <>
        <Header />
        <About />
        <Menu />
        <Gallery />
        <FindUs />
        <Footer />
    </>
  );
}

export default Wrapper(Home);