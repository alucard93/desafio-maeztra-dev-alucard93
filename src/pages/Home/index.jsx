import React from 'react'
import Header from '../../components/Header'
import SliderBannerMain from '../../components/SliderBannerMain'
import WhyBuy from '../../components/WhyBuy'
import PartnerBrands from '../../components/PartnerBrands'
import HomeShowcase from '../../components/HomeShowcase'
import InfoCard from '../../components/InfoCard'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import HeaderMobile from '../../components/HeaderMobile'
import DisclouseMobile from '../../components/DisclouseMobile'
import Modal from '../../components/Modal'

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <SliderBannerMain />
      <WhyBuy />
      <PartnerBrands />
      <HomeShowcase />
      <InfoCard />
      <Newsletter />
      <DisclouseMobile />
      <Footer />
      <Modal/>
    </div>
  )
}

export default Home
