import { InfoCardContainerStyled } from './style'

import infoCardBanner from '../../assets/infocard.png'

const InfoCard = () => {
  return (
    <InfoCardContainerStyled>
      <div className='container-infocard-texts'>
        <h3 className='infocard-texts'>Lorem ipsum </h3>
        <p className='infocard-paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      <figure className='container-infocard-img'>
        <img className='infocard-img' src={infoCardBanner} alt="imagem do banner" />
      </figure>
    </InfoCardContainerStyled>
  )
}

export default InfoCard
