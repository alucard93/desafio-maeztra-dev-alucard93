import React from 'react'
import Header from '../../components/Header'
import SliderBannerMain from '../../components/SliderBannerMain'
import WhyBuy from '../../components/WhyBuy'
import PartnerBrands from '../../components/PartnerBrands'
import HomeShowcase from '../../components/HomeShowcase'
import InfoCard from '../../components/InfoCard'
import Newsletter from '../../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Header />
      <SliderBannerMain />
      <WhyBuy />
      <PartnerBrands />
      <HomeShowcase />
      <InfoCard />
      <Newsletter/>
    </div>
  )
}

export default Home
