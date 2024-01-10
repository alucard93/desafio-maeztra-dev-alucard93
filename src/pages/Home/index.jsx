import React from 'react'
import Header from '../../components/Header'
import SliderBannerMain from '../../components/SliderBannerMain'
import WhyBuy from '../../components/WhyBuy'
import PartnerBrands from '../../components/PartnerBrands'
import HomeShowcase from '../../components/HomeShowcase'

const Home = () => {
  return (
    <div>
      <Header />
      <SliderBannerMain />
      <WhyBuy />
      <PartnerBrands />
      <HomeShowcase/>
    </div>
  )
}

export default Home
