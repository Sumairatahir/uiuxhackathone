import React from 'react';
import Header from './components/Header';
import Image from 'next/image';
import Range from './components/Range';
import Product from './components/Product';
 

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Range/>
      <Product/>
    </div>
      
  
  );
};

export default Home;
