import React from 'react'
import TopHeader from './TopHeader'
import MidHeader from './MidHeader'
import FinalHeader from './FinalHeader'
import { HeaderContainerStyled } from './style'

const Header = () => {
  return (
    <HeaderContainerStyled>
      <TopHeader />
      <MidHeader />
      <FinalHeader />
    </HeaderContainerStyled>
  )
}

export default Header
