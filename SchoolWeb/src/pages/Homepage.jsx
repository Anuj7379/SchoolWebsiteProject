import React from 'react'
import Navbar from '../component/Navbar'
import HomepageFooter from '../component/HomepageFooter';
import HomepageMidContent from '../component/HomepageMidContent';
import HomePhotoSlider from '../component/HomePhotoSlider';

function Homepage() {
  return (
    <>
      <Navbar/>
      <HomepageMidContent/>
      <HomePhotoSlider/>
      <HomepageFooter/>
    </>
  )
}

export default Homepage;
