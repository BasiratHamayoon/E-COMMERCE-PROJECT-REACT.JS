import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import HeroSection2 from '../Components/HomeComponents/HeroSection2'
import HomeTumbnail from '../Components/HomeComponents/HomeTumbnail'
import HomeCatagories from '../Components/HomeComponents/HomeCatagories'

const Home = () => {
  return (
    <div>

          {/* Hero Section of the Home Page */}
          <HeroSection />

          {/* Hero Section Part 2 */}
          <HeroSection2 />

          {/* Home Page thumbnail component */}
          <HomeTumbnail />

          {/* Home Catagories */}
          <HomeCatagories />
          
    </div>
  )
}

export default Home
